import type { NextPage } from "next";
import SurauReview from "../components/SurauReview";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

const SurauPage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="985d914f-a13a-4d21-9289-bf51f9d27097"
          async
        ></script>
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
