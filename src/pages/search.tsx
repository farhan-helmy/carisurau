/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DistrictSelect from "../components/shared/DistrictSelect";
import StateSelect from "../components/shared/StateSelect";
import Sort from "../components/shared/Sort";
import Image from "next/image";
import { api } from "../utils/api";
import LoadingSpinner from "../components/shared/LoadingSpinner";

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

type FilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};

type SurauListProps = {
  sort: string;
  filter: string;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  const [choosenState, setChoosenState] = useState("");
  const [choosenDistrict, setChoosenDistrict] = useState("");
  const router = useRouter();

  const redirectToHomePage = () => {
    void router.push("/");
  };

  const handleNegeriChange = (e: any) => {
    console.log(e);
    setChoosenState(e.id);
  };

  const handleDaerahChange = (e: any) => {
    console.log(e);
    setChoosenDistrict(e.id);
  };

  const filterSurau = () => {
    console.log("filter")
  };

  return (
    <div className="bg-white p-4">
      <div className="w-full rounded-md border border-b shadow-md">
        <div className="items-center space-y-2 px-4 py-5 sm:flex sm:space-x-2 sm:space-y-0 sm:p-6">
          <div className="">
            <input
              type="text"
              name="keyword"
              id="keyword"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Insert anything"
            />
          </div>
          <StateSelect handleNegeriChange={handleNegeriChange} label={false} />
          {choosenState ? (
            <DistrictSelect
              handleDaerahChange={handleDaerahChange}
              choosenState={choosenState}
              label={false}
            />
          ) : null}

          <div className="flex items-end justify-end gap-4">
            <button
              onClick={() => filterSurau()}
              className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              Filter
            </button>
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
  const { data, isLoading, isError } = api.surau.getAllSurau.useQuery();

  if (isError) return <div>error</div>;
  if (isLoading) return <LoadingSpinner />;
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
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setSort("");
  },[]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="mt-4">
        <Filter filter={filter} setFilter={setFilter} />
      </div>

      <div className="p-4">
        <Sort setSort={setSort} />
        <motion.ul
          variants={surauUnorderedListVariants}
          animate={sort === "All" ? "open" : "closed"}
        >
          <SurauList />
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default SearchPage;
