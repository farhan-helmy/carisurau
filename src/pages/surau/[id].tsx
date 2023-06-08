import type { NextPage } from "next";
import SurauReview from "../../components/SurauReview";
import Head from "next/head";
import Script from "next/script";

const SurauPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ratemysurau | Review</title>
      </Head>
      <div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZDMV4PB3GF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-ZDMV4PB3GF');
              `}
        </Script>
        <SurauReview />
      </div>
    </div>
  );
};

export default SurauPage;
