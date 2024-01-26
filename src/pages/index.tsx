import NorthamtonComponent from "@/components/northampton";

export default function Home({ data }: { data: any }) {
  console.log(data, "data");
  return <NorthamtonComponent />;
}
export const getServerSideProps = async (ctx) => {
  let data = [];
  const queries = Object.keys(ctx?.query)
    .map((k) => `${k}=${ctx.query[k]}`)
    .join("&");
  const response = await fetch(
    `https://autotrader.co.uk/json/dealers/stock?advanced=true&advertising-location=at_cars&advertising-location=at_profile_cars&dealer=10038946&${queries}`
  );
  if (response.ok) {
    data = await response.json();
  }
  return {
    props: {
      data,
    },
  };
};
