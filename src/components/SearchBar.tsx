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
                className={`flex w-full items-start justify-start border border-transparent bg-white py-3 px-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:cursor-pointer ${
                  idx == 0 ? "rounded-t-md" : ""
                } ${data.length - 1 == idx ? "rounded-b-md" : ""}`}
              >
                <div className="flex flex-col items-start">
                  <div className="text-lg font-semibold text-gray-600 text-start text-ellipsis overflow-hidden">
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

  return (
    <>
      <div className="absolute mt-24 w-full p-4">
        <div>
          <input
            type="text"
            placeholder="Search for a Surau"
            className="mt-8 w-full rounded-md border border-transparent bg-white py-3 px-2  text-base font-medium text-gray-900 hover:bg-gray-100"
            onChange={(e) => setSurauInput(e.target.value)}
          />
        </div>
        {surauInput.length > 0 ? <SearchBarResult input={surauInput} /> : null}
      </div>
    </>
  );
};

export default SearchBar;
