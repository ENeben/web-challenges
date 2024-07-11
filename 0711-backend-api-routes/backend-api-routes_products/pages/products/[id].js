import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SingleFishPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: singleFish, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!singleFish) {
    return <h1>No fish available</h1>;
  }

  return (
    <>
      <ul>
        <li>name: {singleFish.name}</li>
        <li>description: {singleFish.description}</li>
        <li>
          price: {singleFish.price} {singleFish.currency}
        </li>

        <li>category: {singleFish.category}</li>
      </ul>
      <Link href="/products">Back to all fishes</Link>
    </>
  );
}
