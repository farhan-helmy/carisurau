import { useSession } from "next-auth/react";
import Image from "next/image";
import Header from "../../components/shared/Header";
import { useState, useEffect } from "react";
import StatsCard from "../../components/profile/StatsCard";
import { api } from "../../utils/api";

const imagePaths = [
  "/assets/background/carisurau.jpeg",
  "/assets/background/carisurau1.jpeg",
  "/assets/background/carisurau2.jpeg",
];

const ProfilePage = () => {
  const { data: session } = useSession();
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const randomImagePath =
      imagePaths[Math.floor(Math.random() * imagePaths.length)];
    setImagePath(randomImagePath as string);
  }, []);

  return (
    <div>
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
      </div>

      <div className="container mx-auto h-screen min-w-max overflow-hidden rounded-lg bg-white p-4 mix-blend-multiply shadow xl:max-w-screen-xl">
        <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2>
        <div className="bg-white p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <Image
                  className="mx-auto h-24 w-24 rounded-full border border-white"
                  src={session?.user.image || "/images/avatar.png"}
                  alt="avatar"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-sm font-medium text-gray-600">
                  Welcome back,
                </p>
                <p className="text-xl font-bold text-gray-900">
                  {session?.user.name}
                </p>

                {/* <p className="text-sm font-medium text-gray-600">{user.role}</p> */}
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center rounded-xl bg-indigo-700 px-4 py-2">
              <p className="text-xl font-bold text-white">0</p>
              <p className="text-white">Contribution Points! 🤯</p>
            </div>
            {/* <div className="mt-5 flex justify-center sm:mt-0">
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                View profile
              </a>
            </div> */}
          </div>
        </div>
        <StatsCard />
      </div>
    </div>
  );
};

export default ProfilePage;
