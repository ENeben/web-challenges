import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data: character, isLoading } = useSWR(
    "/api/random-character",
    fetcher
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!character) {
    return <h1>No character available</h1>;
  }

  const { firstName, lastName, age, birthday, geohash, twitter_name } =
    character;

  return (
    <>
      <h1>
        Hi, I am {firstName} {lastName}!
      </h1>
      <p>
        I am {age} years old and my birthday is on {birthday}.{" "}
      </p>
      <p>
        My geohash is
        {geohash}. Follow me on twitter at {twitter_name}.
      </p>
    </>
  );
}
