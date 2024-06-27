import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return <p>Volume not found.</p>;
  }

  const currentIndex = volumes.indexOf(currentVolume);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
  const nextIndex = currentIndex < volumes.length - 1 ? currentIndex + 1 : null;
  const prevVolume = prevIndex !== null ? volumes[prevIndex] : null;
  const nextVolume = nextIndex !== null ? volumes[nextIndex] : null;

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map((book) => (
          <li key={book.ordinal}>
            Ordinal number: {book.ordinal} <br />
            Title: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={currentVolume.cover}
        height={230}
        width={140}
        alt={`The volume cover of ${currentVolume.title}`}
      />
      <section className="prev-next-links">
        {prevVolume !== null && (
          <Link href={`/volumes/${prevVolume.slug}`}>
            Previous Volume: {prevVolume.title}
          </Link>
        )}
        <br />
        {nextVolume !== null && (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title}
          </Link>
        )}
      </section>
    </div>
  );
}
