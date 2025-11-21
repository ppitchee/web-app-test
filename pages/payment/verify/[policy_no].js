import Head from "next/head";

export default function VerifyPage({ policy_no }) {
  return (
    <>
      <Head>
        <title>Verify Policy</title>

        <meta property="og:title" content="Verify Policy Page" />
        <meta
          property="og:description"
          content={`Verification for policy ${policy_no}`}
        />
        <meta property="og:image" content="/Web_Banner_1440x400_DT_TH.webp" />
        <meta
          property="og:url"
          content={`hthttps://web-app-test-self.vercel.app/payment/verify`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Verify Page</h1>
      <p>Policy: {policy_no}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { policy_no } = context.query;

  return {
    props: { policy_no },
  };
}
