import type { NextPage } from "next";
import SurauReview from "../components/SurauReview";
import Script from "next/script";

const SurauPage: NextPage = () => {
  return (
    <div>
      <Script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token="985d914f-a13a-4d21-9289-bf51f9d27097"
        async
      ></Script>
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
  );
};

export default SurauPage;
