import { useState } from "react";
import { useDebounce } from "use-debounce";
import { api } from "../utils/api";
import { useRouter } from "next/router";
import { capitalizeFirstLetter } from "../utils";

interface ResultPropsType {
  input: string;
}

const SearchBarResult = (props: ResultPropsType) => {
  const [surauInputDebounced] = useDebounce<string>(props.input, 500);
  const searchSurau = api.surau.searchSurau;
  const router = useRouter();

  const { data, isLoading } = searchSurau.useQuery({
    name: surauInputDebounced.toLowerCase().replace(/ /g, "-"),
  });

  const redirectToSurauPage = (surauUniqueName: string) => {
    void router.push(`/surau/${surauUniqueName}`);
  };

  return (
    <div>
      {" "}
      {isLoading ? (
        <div className="flex w-full items-start justify-start rounded-md border border-transparent bg-white py-3 px-2 text-base font-medium text-gray-900 hover:bg-gray-100">
          Searching...
        </div>
      ) : !surauInputDebounced ? null : (
        <>
          {data?.map((surau, idx) => {
            return (
              <div
                key={surau.id}
                onClick={() => redirectToSurauPage(surau.unique_name)}
                className={`flex w-full items-start justify-start border border-transparent bg-white py-3 px-2 text-base font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-100 ${
                  idx == 0 ? "rounded-t-md" : ""
                } ${data.length - 1 == idx ? "rounded-b-md" : ""}`}
              >
                <div className="flex flex-col items-start">
                  <div className="overflow-hidden text-ellipsis text-start text-lg font-semibold text-gray-600">
                    {capitalizeFirstLetter(surau.name)}
                  </div>
                  <div className="text-xs font-light italic">
                    {surau.state.name}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

const SearchBar = () => {
  const [surauInput, setSurauInput] = useState<string>("");
  const router = useRouter();

  const redirectToSearchPage = () => {
    void router.push(`/search`);
  };

  return (
    <>
      <div onClick={() => redirectToSearchPage()} className="w-full">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          {/* <input
            type="text"
            placeholder="Search for a Surau"
            className="mt-8 w-full rounded-md border border-transparent bg-white py-3 px-2  text-base font-medium text-gray-900 hover:bg-gray-100"
            onChange={(e) => setSurauInput(e.target.value)}
          /> */}
          <input
            type="search"
            className="mt-8 block w-full rounded-full border border-transparent bg-white p-3 pl-12 text-base hover:bg-gray-100 focus:border-gray-500"
            placeholder="Search for a Surau"
            onChange={(e) => setSurauInput(e.target.value)}
          />
        </div>
        {surauInput.length > 0 ? <SearchBarResult input={surauInput} /> : null}
      </div>
    </>
  );
};

export default SearchBar;
