/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DistrictSelect from "../components/shared/DistrictSelect";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import Sort from "../components/shared/Sort";
import StateSelect from "../components/shared/StateSelect";
import useSurauStore from "../store/surau";
import { truncateName } from "../utils";
import { api } from "../utils/api";
import Badge from "../components/shared/Badge";

const surauUnorderedListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const surauListVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Filter = () => {
  const router = useRouter();
  const surauStore = useSurauStore();

  const redirectToHomePage = () => {
    void router.push("/");
  };

  const handleNegeriChange = (e: any) => {
    surauStore.setFilterType("state");
    surauStore.setState(e.id);
  };

  const handleDaerahChange = (e: any) => {
    surauStore.setFilterType("district");
    surauStore.setDistrict(e.id);
  };
  return (
    <div className="bg-background p-4">
      <div className="w-full rounded-md border border-b border-muted shadow-md">
        <div className="items-center space-y-2 px-4 py-5 sm:flex sm:space-x-2 sm:space-y-0 sm:p-6">
          <StateSelect handleNegeriChange={handleNegeriChange} label={false} />
          {surauStore.state ? (
            <DistrictSelect
              handleDaerahChange={handleDaerahChange}
              choosenState={surauStore.state}
              label={false}
            />
          ) : null}

          <div className="flex items-end justify-end gap-4">
            <button
              onClick={redirectToHomePage}
              className="flex gap-2 text-xs underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SurauList = () => {
  const surauStore = useSurauStore();
  const { data, isLoading, isError } = api.surau.getAllSurau.useQuery({
    filterType: surauStore.filterType,
    state: surauStore.state,
    district: surauStore.district,
  });

  if (isError) return <div>error</div>;
  if (isLoading) return <LoadingSpinner />;
  if (data === undefined || data.length === 0)
    return (
      <div>
        <Image
          src="/assets/background/empty.png"
          alt="Empty pic"
          width={500}
          height={500}
        />
      </div>
    );

  return (
    <>
      {data?.map((surau) => (
        <motion.li
          variants={surauListVariants}
          whileTap={{ scale: 0.95 }}
          key={surau.id}
        >
          <Link href={`/${surau.unique_name}`}>
            <div
              className="w-full border border-b border-muted text-center"
              key={surau.id}
            >
              <div className="flex justify-between p-2">
                <div className="flex flex-col items-start justify-start">
                  <span className="font-semibold">
                    {truncateName(surau.name, 20)}
                  </span>
                  <p className="text-xs font-light">
                    {surau.district.name}, {surau.state.name}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {surau?.is_solat_jumaat ? (
                      <Badge color="green" text="Solat Jumaat" />
                    ) : null}
                    {surau?.is_qiblat_certified ? (
                      <Badge color="purple" text="Qiblat Certified" />
                    ) : null}
                  </div>
                </div>
                <div className="max-h-12 overflow-hidden rounded-xl bg-primary object-fill">
                  {surau.images[0]?.file_path ? (
                    <div className="flex h-12 items-center justify-center">
                      <Image
                        src={surau.images[0]?.file_path}
                        alt="test"
                        className="h-12 w-12 object-cover group-hover:opacity-75"
                        width={25}
                        height={25}
                        
                      />
                    </div>
                  ) : (
                    <>
                      <div className="flex h-12 w-auto items-center justify-center">
                        <Image
                          src="/assets/background/carisuraudefault.png"
                          alt="default"
                          className="h-12 w-auto object-contain group-hover:opacity-75"
                          width={500}
                          height={500}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </motion.li>
      ))}
    </>
  );
};

const SearchPage: NextPage = () => {
  const surauStore = useSurauStore();
  const router = useRouter();

  useEffect(() => {
    surauStore.setFilterType("All");
    surauStore.setState("");
    surauStore.setDistrict("");

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        void router.push("/");
      }
    };

    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="mt-4">
        <Filter />
      </div>

      <div className="p-4">
        <Sort />
        <motion.ul variants={surauUnorderedListVariants}>
          <SurauList />
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default SearchPage;
