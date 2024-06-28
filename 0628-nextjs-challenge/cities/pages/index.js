import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Moin aus Hamburg.</h1>
      <p>Willst du wissen, welches die größten Städte der Welt sind?</p>
      <Link href="/cities/">Dann klicke hier.</Link>
    </div>
  );
}
