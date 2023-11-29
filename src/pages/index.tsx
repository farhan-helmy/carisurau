/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SurauList from "../components/SurauList";
import Head from "next/head";
import Modal from "../components/shared/Modal";
import { useEffect, useState } from "react";
import AddSurauForm from "../components/AddSurauForm";
import Script from "next/script";
import { useSession } from "next-auth/react";
import SignIn from "../components/shared/SignIn";
import { getLocation } from "../utils/location";
import MasjidIcon from '../../public/assets/navlogo/masjid.svg';
import Image from "next/image";

const imagePaths = [
  "/assets/background/carisurau.jpeg",
  "/assets/background/carisurau1.jpeg",
  "/assets/background/carisurau2.jpeg",
];


interface BottomNavProps {
  handleSetOpenSurauForm: () => void;
}

const BottomNav = ({ handleSetOpenSurauForm }: BottomNavProps) => {
  return (
    <div className="rounded-xl top-0 left-0 w-full h-14 bg-background text-white">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
        <div className="flex items-center justify-center">
          <button type="button">
            <Image src={MasjidIcon} alt={"masjid"} height={32} width={32} />
          </button>
        </div>

        {/* <div className="flex items-center justify-center">
          <button
            onClick={handleSetOpenSurauForm}
          >
            <PlusCircleIcon className="h-12 w-12" />
          </button>

        </div> */}
        <button type="button">
          <span>Settings</span>
        </button>
      </div>
    </div>
  )
}

export default function Index() {
  const [openAddSurauForm, setOpenAddSurauForm] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [userDistrict, setUserDistrict] = useState("");
  const [userState, setUserState] = useState("");
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
    getLocation()
      .then((location) => {
        setUserDistrict(location.district);
        setUserState(location.state as string);
      })
      .catch(() => {
        alert("something went wrong");
      });

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

      <div className="bg-background">
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
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="985d914f-a13a-4d21-9289-bf51f9d27097"
          async
        ></Script>

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
          <BottomNav
            handleSetOpenSurauForm={handleSetOpenSurauForm}
          />
          <section
            aria-labelledby="category-heading"
            className="pt-2 sm:pt-12 xl:mx-auto xl:max-w-7xl xl:px-8 md:mb-10"
          >
            <SurauList
              type="recent"
              userDistrict={userDistrict}
              userState={userState}
            />
          </section>

        </main>
      </div>
    </>
  );
}
