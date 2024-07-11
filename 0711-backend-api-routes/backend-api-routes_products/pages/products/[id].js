import useSWR from "swr";
import { useRouter } from "next/router";

export default function SingleFishPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: SingleFish, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!SingleFish) {
    return <h1>No fish available</h1>;
  }

  return (
    <ul>
      <li>name: {SingleFish.name}</li>
      <li>description: {SingleFish.description}</li>
      <li>price: {SingleFish.price}</li>
      <li>currency: {SingleFish.currency}</li>
      <li>category: {SingleFish.category}</li>
    </ul>
  );
}
