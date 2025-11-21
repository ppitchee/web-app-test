import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My GitHub Pages – Home</title>

        {/* Required */}
        <meta property="og:title" content="My GitHub Home" />
        <meta property="og:description" content="This is my homepage on GitHub Pages built with Next.js 12." />
        <meta property="og:type" content="website" />

        {/* Must be absolute URL for FB/Twitter */}
        <meta property="og:image" content="https://<your-github-username>.github.io/<repo-name>/og-image.png" />
        <meta property="og:url" content="https://<your-github-username>.github.io/<repo-name>/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{ padding: 40 }}>
        <h1>Welcome to My Next.js 12 GitHub Page</h1>
        <p>This page is exported statically and supports OG tags.</p>
      </main>
    </>
  );
}
