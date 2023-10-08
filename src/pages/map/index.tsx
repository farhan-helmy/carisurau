import Head from "next/head";
import Link from "next/link";
import Header from "../../components/shared/Header";
import { useEffect, useState } from "react";
import Image from "next/image";
import MapBox from "./reactMapBox";
const imagePaths = [
  "/assets/background/carisurau.jpeg",
  "/assets/background/carisurau1.jpeg",
  "/assets/background/carisurau2.jpeg",
];

export default function Index() {
  const [imagePath, setImagePath] = useState("");
  useEffect(() => {
    const randomImagePath =
      imagePaths[Math.floor(Math.random() * imagePaths.length)];
    setImagePath(randomImagePath as string);
  }, []);
    return (
        <>
          <Head>
            {/* Google meta tags */}
            <meta
              name="description"
              content="Carisurau - Cari surau berdekatan anda dengan mudah. Cari waktu solat, kemudahan, dan arah ke surau."
            />
            <meta
              name="keywords"
              content="carisurau, cari, surau, cari surau, surau ioi, masjid, surau near me, masjid near me, surau finder, next.js, prayer times, mosque finder, surau locator, Islamic prayer app"
            />
            <meta name="author" content="farhanhelmy" />
            {/* Twitter meta tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@farhanhelmycode" />
            <meta
              name="twitter:title"
              content="Carisurau | Cari surau berdekatan anda dengan mudah"
            />
            <meta
              name="twitter:description"
              content="Discover and locate suraus near you with ease. Find prayer times, facilities, and directions."
            />
            <meta
              name="twitter:image"
              content="/assets/background/carisurau.jpeg"
            />
            {/* Facebook meta tags */}
            <meta property="og:url" content="https://www.carisurau.com" />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Carisurau | Cari surau berdekatan anda dengan mudah"
            />
            <meta
              property="og:description"
              content="Discover and locate suraus near you with ease. Find prayer times, facilities, and directions."
            />
            <meta property="og:image" content="/assets/background/carisurau.jpeg" />
            <meta property="og:image:alt" content="Carisurau Logo" />
            <meta property="og:site_name" content="Carisurau"></meta>
            <meta property="fb:app_id" content="571114311611632" />
            <title>Carisurau | Cari surau berdekatan anda dengan mudah</title>
          </Head>
          
          <div className="relative bg-background">
            {/* Decorative image and overlay */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
              {imagePath !== "" ? (
                <Image
                  src={imagePath}
                  alt="random background image"
                  className="h-full w-full object-cover object-center"
                  width={1920}
                  height={1080}
                  priority
                />
              ) : null}
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 opacity-50"
            />

            {/* Navigation */}
            <Header />

            
            {/* <div className="relative mx-auto flex max-h-7xl flex-col items-center py-2 px-6 text-center sm:py-64 lg:px-0 border border-black">
            </div> */}
          </div>
        
          <MapBox/>
          
        </>
    );
}
    