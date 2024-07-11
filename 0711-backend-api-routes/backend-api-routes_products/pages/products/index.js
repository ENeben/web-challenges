import useSWR from "swr";
import Link from "next/link";

export default function Products() {
  const { data: fishes, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!fishes) {
    return <h1>No fishes available</h1>;
  }

  return (
    <>
      <Link href={"/products/random"}>Go to random fish</Link>
      <ul>
        {fishes.map((fish) => (
          <li key={fish.id}>
            <Link href={`/products/${fish.id}`}>Go to {fish.name}</Link>
            <ul>
              <li>name: {fish.name}</li>
              <li>description: {fish.description}</li>
              <li>
                price: {fish.price} {fish.currency}
              </li>
              <li>category: {fish.category}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
