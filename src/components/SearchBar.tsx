import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { api } from "../utils/api";
import { useRouter } from "next/router";
import { capitalizeFirstLetter } from "../utils";

const SearchBar = () => {
  const [surauInput, setSurauInput] = useState<string>("");
  const [surauInputDebounced] = useDebounce<string>(surauInput, 500);
  //   const [isLoading, setIsLoading] = useState(false);
  const searchSurau = api.surau.searchSurau;
  const router = useRouter();

  const { data, error, isLoading } = searchSurau.useQuery({
    name: surauInputDebounced.toLowerCase().replace(/ /g, "-"),
  });

  const redirectToSurauPage = (surauUniqueName: string) => {
    void router.push(`/surau/${surauUniqueName}`);
  };

  //   useEffect(() => {
  //     if (surauInput) {
  //       setIsLoading(true);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 0);
  //     }
  //   }, [surauInput]);

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

        {isLoading ? (
          <div className="flex w-full items-start justify-start rounded-md border border-transparent bg-white py-3 px-2 text-base font-medium text-gray-900 hover:bg-gray-100">
            Searching...
          </div>
        ) : !surauInputDebounced ? null : (
          <>
            {data?.map((surau) => {
              return (
                <div
                  key={surau.id}
                  onClick={() => redirectToSurauPage(surau.unique_name)}
                  className="flex w-full items-start justify-start rounded-md border border-transparent bg-white py-3 px-2 text-base font-medium text-gray-900 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-start">
                    <div className="text-lg font-bold text-gray-600">
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
    </>
  );
};

export default SearchBar;
