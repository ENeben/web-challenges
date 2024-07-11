import useSWR from "swr";
import Link from "next/link";

export default function RandomFishPage() {
  const { data: randomFish, isLoading } = useSWR("/api/products/random");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!randomFish) {
    return <h1>No fish available</h1>;
  }

  return (
    <>
      <ul>
        <li>name: {randomFish.name}</li>
        <li>description: {randomFish.description}</li>
        <li>
          price: {randomFish.price} {randomFish.currency}
        </li>
        <li>category: {randomFish.category}</li>
      </ul>
      <Link href="/products">Back to all fishes</Link>
    </>
  );
}
