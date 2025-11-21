import Head from "next/head";

export default function VerifyPage() {
  return (
    <>
      <Head>
        <title>Verify Policy</title>
        <meta property="og:title" content="Verify Policy Page" />
        <meta
          property="og:description"
          content="Static description for payment verify"
        />
        <meta property="og:image" content="/Web_Banner_1440x400_DT_TH.webp.jpg" />
        <meta
          property="og:url"
          content="https://web-app-test-self.vercel.app/payment/verify"
        />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Verify Page</h1>
    </>
  );
}
