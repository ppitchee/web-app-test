import Head from "next/head";

export default function VerifyPage({metaData, policy_no }) {
  console.log("policy_no",policy_no);
  return (
    <>
      <Head>
          <title>{metaData?.title}</title>

          <meta name='description' content={metaData?.description} />
          <meta property='og:title' content={metaData?.title} />
          <meta property='og:description' content={metaData?.description} />
          <meta property='og:type' content='website' />
          <meta property='og:image' content={metaData?.imageUrl} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:url' content={metaData?.url} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={metaData?.title} />
          <meta name='twitter:description' content={metaData?.description} />
          <meta name='twitter:image' content={metaData?.imageUrl} />
        </Head>

      <h1>Verify Page</h1>
      <p>Policy: {policy_no}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { policy_no } = context.params;

  const host =`https://${context.req.headers.host}`
  const urlImg = `${host}/web_banner_v1.jpg`;
  const url = `${host}${context.resolvedUrl}`;

  return {
    props: {
      metaData: {
        title: 'ระบบชำระเงินออนไลน์ l เมืองไทยประกันชีวิต - MTL',
        description:
          'บริษัทไม่มีนโยบายให้โอนเข้าบัญชีส่วนตัวของตัวแทน ชำระเบี้ยตรงผ่าน Thai QR, Mobile Banking หรือบัตรเครดิต ตาม Link ด้านบนเท่านั้น',
        url: url,
        imageUrl: urlImg,
      },
      policy_no,
    },
  };
}