import useSWR from "swr";

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There is an Error. Try again later.</h1>;
  }

  // if (data) {
  //   console.log(data);
  // }

  // console.log("Loading:", isLoading);
  // console.log("Error:", error);

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
