import { cities } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cities() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    const randomCity = getRandomElement(cities).slug;
    router.push(`/cities/${randomCity}`);
  }

  return (
    <main>
      <h1>Die 10 größten Städte der Welt</h1>
      <p>
        Im folgenden werden die zehn größten Städte der Welt nach Einwohnerzahl
        aufgelistet. Dabei sind das Ranking und die Inhalte annähernd
        unverändert und unreflektiert von folgendem Artikel der WirtschaftsWoche
        übernommen. Kritisches Weiterdenken und Hinterfragen der
        wirtschaftlichen Beschreibungen kann nicht schaden.
      </p>
      <Link href="https://www.wiwo.de/erfolg/trends/ranking-2024-das-sind-die-zehn-groessten-staedte-der-welt-nach-einwohnerzahl/26895932.html">
        Quelle
      </Link>
      <ol>
        {cities.map((city) => (
          <li key={city.id}>
            <Link href={`/cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
      </ol>
      <button type="button" onClick={handleClick}>
        Go to a random city
      </button>
    </main>
  );
}
