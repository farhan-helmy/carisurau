/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import SurauList from "../components/SurauList";
import Image from "next/image";
import Head from "next/head";
import Modal from "../components/shared/Modal";
import { useEffect, useState } from "react";
import AddSurauForm from "../components/AddSurauForm";
import SearchBar from "../components/SearchBar";
import Script from "next/script";
import Header from "../components/shared/Header";
import { useSession } from "next-auth/react";
import SignIn from "../components/shared/SignIn";

const imagePaths = [
  "/assets/background/carisurau.jpeg",
  "/assets/background/carisurau1.jpeg",
  "/assets/background/carisurau2.jpeg",
];

export default function Index() {
  const [openAddSurauForm, setOpenAddSurauForm] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [imagePath, setImagePath] = useState("");
  const { data: session } = useSession();

  const handleSetOpenSurauForm = () => {
    if (!session) {
      setOpenSignInModal(true);
      return;
    }

    setOpenAddSurauForm(true);
  };

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
          content="Carisurau - The Ultimate Surau Finder. Discover and locate suraus near you with ease. Find prayer times, facilities, and directions."
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
          content="Carisurau - Surau Finder | Find Surau Near You"
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
          content="Carisurau - Surau Finder | Find Surau Near You"
        />
        <meta
          property="og:description"
          content="Discover and locate suraus near you with ease. Find prayer times, facilities, and directions."
        />
        <meta property="og:image" content="/assets/background/carisurau.jpeg" />
        <meta property="og:image:alt" content="Carisurau Logo" />
        <meta property="og:site_name" content="Carisurau"></meta>
        <meta property="fb:app_id" content="571114311611632" />
        <title>Carisurau | Find Surau Near You</title>
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="985d914f-a13a-4d21-9289-bf51f9d27097"
          async
        ></script>
      </Head>

      <div className="bg-white">
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

        {/* Hero section */}
        <div className="relative bg-gray-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <Image
              src={imagePath}
              alt="random background image"
              className="h-full w-full object-cover object-center"
              width={1920}
              height={1080}
              priority
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-50"
          />

          {/* Navigation */}
          <Header />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center py-20 px-6 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Carisurau.com
            </h1>
            <p className="mt-4 text-xl text-white">
              Discover Your Perfect Prayer Haven with Ease!
            </p>
            {/* Search bar component */}
            <SearchBar />
            <p className="z-0 mt-2 text-xs font-extralight italic text-white md:text-lg">
              Can`t find your Surau?{" "}
              <span
                className="cursor-pointer font-bold underline hover:underline"
                onClick={() => handleSetOpenSurauForm()}
              >
                Add here
              </span>
            </p>
          </div>
        </div>
        <Modal open={openAddSurauForm} setOpen={setOpenAddSurauForm}>
          <AddSurauForm setOpen={setOpenAddSurauForm} />
        </Modal>
        <SignIn
          openSignInModal={openSignInModal}
          setOpenSignInModal={setOpenSignInModal}
          message="Sign in to add Surau"
          callbackUrl="/"
        />
        <main>
          {/* Category section */}
          <section
            aria-labelledby="category-heading"
            className="pt-4 sm:pt-12 xl:mx-auto xl:max-w-7xl xl:px-8"
          >
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2
                id="category-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Recently added
              </h2>
            </div>
            <SurauList type="recent" />
          </section>

          {/* <section aria-labelledby="category-heading" className="pt-12 sm:pt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Newly added
              </h2>
            </div>
            <SurauList type='new' />
          </section> */}
        </main>
      </div>
    </>
  );
}
