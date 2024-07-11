import useSWR from "swr";

export default function Products() {
  const { data: fishes, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!fishes) {
    return <h1>No fishes available</h1>;
  }

  return (
    <ul>
      {fishes.map((fish) => (
        <li key={fish.id}>
          <ul>
            <li>name: {fish.name}</li>
            <li>description: {fish.description}</li>
            <li>price: {fish.price}</li>
            <li>currency: {fish.currency}</li>
            <li>category: {fish.category}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
