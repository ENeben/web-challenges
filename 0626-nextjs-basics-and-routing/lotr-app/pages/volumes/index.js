import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleClick() {
    const randomVolume = getRandomElement(volumes);
    const randomSlug = randomVolume.slug;
    router.push(`/volumes/${randomSlug}`);
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleClick}>
        Go to a random volume
      </button>
    </div>
  );
}
