import Head from "next/head";

export default function Home({ title, description, image }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web-app-test-self.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{ padding: 40 }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = {
    title: "Dynamic Home",
    description: "Dynamic OG on Vercel",
    image: "https://web-app-test-self.vercel.app/og-image.png",
  };

  return { props: data };
}