/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DistrictSelect from "../components/shared/DistrictSelect";
import StateSelect from "../components/shared/StateSelect";
import Sort from "../components/shared/Sort";
import Image from "next/image";
import { api } from "../utils/api";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import useSurauStore from "../store/surau";

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
    surauStore.setState(e.id)
  };

  const handleDaerahChange = (e: any) => {
    surauStore.setFilterType("district");
    surauStore.setDistrict(e.id)
  };
  return (
    <div className="bg-white p-4">
      <div className="w-full rounded-md border border-b shadow-md">
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
            <button onClick={redirectToHomePage} className="text-xs underline">
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
  if (data === undefined || data.length === 0) return (
    <div>
      <Image
        src="/assets/background/empty.png"
        alt="Empty pic"
        width={500}
        height={500}
      />
    </div>
  )

  return (
    <>
      {data?.map((surau) => (
        <motion.li
          variants={surauListVariants}
          whileTap={{ scale: 0.95 }}
          key={surau.id}
        >
          <div className="w-full border border-b text-center" key={surau.id}>
            <div className="flex justify-between p-2">
              <div className="flex flex-col items-start justify-start">
                <p className="font-semibold">{surau.name}</p>
                <p className="text-xs font-light">{surau.district.name}, {surau.state.name}</p>
              </div>
              <div className="max-h-12 overflow-hidden rounded-xl bg-gray-200 object-fill">
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
                ) : <>
                  <div className="flex h-12 w-auto items-center justify-center">
                    <Image
                      src="/assets/background/carisuraudefault.png"
                      alt="default"
                      className="h-12 w-auto object-contain group-hover:opacity-75"
                      width={500}
                      height={500}
                    />
                  </div>
                </>}
              </div>
            </div>
          </div>
        </motion.li>
      ))
      }
    </>
  );
};

const SearchPage: NextPage = () => {
  const surauStore = useSurauStore();
  useEffect(() => {
    surauStore.setFilterType("All");
    surauStore.setState("");
    surauStore.setDistrict("");
  }, [])
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
        <motion.ul
          variants={surauUnorderedListVariants}
        >
          <SurauList />
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default SearchPage;
