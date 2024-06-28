import { cities } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function City() {
  const router = useRouter();
  const { slug } = router.query;

  const currentCity = cities.find((city) => city.slug === slug);

  const currentIndex = cities.indexOf(currentCity);
  const prevCity = currentIndex > 0 ? cities[currentIndex - 1] : null;
  const nextCity =
    currentIndex < cities.length - 1 ? cities[currentIndex + 1] : null;

  //das ist wichtig, damit es auch beim Reload funktioniert:
  if (!currentCity || !slug) {
    return <p>Stadt nicht gefunden</p>;
  }

  return (
    <>
      <Link href="/cities">Zurück zu der Übersicht</Link>
      <h1>{currentCity.name}</h1>
      <figure>
        <div>
          <Image
            src={currentCity.image}
            alt={`Impressions from ${currentCity.name}.`}
            height={500}
            width={500}
          />
        </div>
        <figcaption>Bild von Wikipedia</figcaption>
      </figure>
      <p>{currentCity.description}</p>
      <p>{currentCity.forecast}</p>
      <ul>
        <li>Land: {currentCity.country}</li>
        <li>Einwohnerzahl: {currentCity.population}</li>
      </ul>
      <p>
        Willst du mehr über {currentCity.name} erfahren? Dann schau dir doch den{" "}
        <Link
          href={currentCity.wiki}
          target="_blank"
        >{`Artikel über ${currentCity.name} bei Wikipedia`}</Link>
        an.
      </p>
      <section>
        {prevCity && (
          <Link href={`/cities/${prevCity.slug}`}>
            Previous City: {prevCity.name}
          </Link>
        )}
        <br />
        {nextCity && (
          <Link href={`/cities/${nextCity.slug}`}>
            Next City: {nextCity.name}
          </Link>
        )}
      </section>
    </>
  );
}
