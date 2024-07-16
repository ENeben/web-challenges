import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { ReviewTitle } from "./Product.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews ? (
        data.reviews.map((review) => (
          <article key={review._id}>
            <p>
              Review: <ReviewTitle>{review.title}</ReviewTitle> <br />
              Text: {review.text} <br />
              Rating: {review.rating}
            </p>
          </article>
        ))
      ) : (
        <p>No reviews available</p>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
