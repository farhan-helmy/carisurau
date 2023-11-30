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
import CsLogo from '../../public/assets/logo/cslogo.png';
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { RowsIcon, MoonIcon, SunIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";
import { useTheme } from "next-themes"
import MasjidLogo from '../../public/assets/navlogo/masjid.svg';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Toaster } from "../components/ui/toaster";

const imagePaths = [
  "/assets/background/carisurau.jpeg",
  "/assets/background/carisurau1.jpeg",
  "/assets/background/carisurau2.jpeg",
];

const Nav = () => {
  return (
    <div className="flex flex-col gap-4 font-light">
      <div className="flex flex-row gap-2">
        <PersonIcon className="w-6 h-6" />
        Profile
      </div>
      <div>
        Surau
      </div>
      <div className="flex flex-row gap-2">
        <Image src={MasjidLogo} alt="carisurau" width={24} height={24} className="outline-white" />
        Masjid
      </div>
      <div>
        Search
      </div>
    </div>
  )
}


const ModeToggler = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
const TopNav = () => {
  return (
    <div>
      <Sheet className="flex justify-between items-center">
        <div className="grid grid-cols-3">
          <SheetTrigger asChild>
            <div className="flex items-left justify-left p-4">
              <RowsIcon className="w-6 h-6" />
            </div>
          </SheetTrigger>
          <div className="flex items-center justify-center">
            <Image src={CsLogo} alt="carisurau" width={24} height={24} />
          </div>
          <div className="flex items-center justify-center ml-12 mt-2">
            <ModeToggler />
          </div>
        </div>

        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className='font-light'>Carisurau</SheetTitle>

          </SheetHeader>
          <div className="p-4 mt-4">
            <Nav />
          </div>

        </SheetContent>
      </Sheet>
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
        <TopNav />
        <main>
          <Toaster />
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
