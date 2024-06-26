import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Link to the volume overview:</h1>
      <Link href="/volumes">Click here!</Link>
    </div>
  );
}
