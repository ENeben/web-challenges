import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";
import Button from "../Button/Button";

export default function Product() {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    } else {
      mutate();
      setIsEditing(false);
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    } else {
      router.push("/");
    }
  }

  return (
    <ProductCard>
      <Button
        text={isEditing ? "LEAVE EDIT MODE" : "EDIT"}
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      />
      <Button text="DELETE" onClick={() => handleDeleteProduct(id)} />
      {isEditing && (
        <ProductForm
          onSubmit={handleEditProduct}
          isEditing={isEditing}
          valueName={data.name}
          valueDescription={data.description}
          valuePrice={data.price}
          valueCurrency={data.currency}
        />
      )}
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
