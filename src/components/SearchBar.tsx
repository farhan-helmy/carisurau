import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { api } from "../utils/api";
import { useRouter } from "next/router";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import { capitalizeFirstLetter } from "../utils";

const SearchBar = () => {
    const [surauInput, setSurauInput] = useState<string>("");
    const [searched, setSearched] = useState(false);
    const [surauInputDebounced] = useDebounce<string>(surauInput, 500);
    const [isLoading, setIsLoading] = useState(false);
    const searchSurau = api.surau.searchSurau;
    const router = useRouter();

    const res = searchSurau.useQuery({
        name: surauInputDebounced.toLowerCase().replace(/ /g, "-"),
    });

  
    const redirectToSurauPage = (surauUniqueName: string) => {

        void router.push(`/surau/${surauUniqueName}`);
    };

    useEffect(() => {
        if (surauInput) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }, [surauInput]);

    return (
        <>
        <div className="w-full absolute mt-36 p-4">
            
            <div>
                <input
                    type="text"
                    placeholder="Search for a Surau"
                    className="mt-8 rounded-md border border-transparent bg-white py-3 w-full px-2  text-base font-medium text-gray-900 hover:bg-gray-100"
                    onChange={(e) => setSurauInput(e.target.value)}
                />
            </div>

            {isLoading ? (
                <div className="rounded-md border border-transparent bg-white py-3 w-full px-2 text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-start items-start">
                    Searching...
                </div>
            ) : !surauInputDebounced ? null : (
                <>
                    {res.data?.map((surau) => {
                        return (

                            <div
                                key={surau.id}
                                onClick={() =>
                                    redirectToSurauPage(surau.unique_name)
                                }
                                className="rounded-md border border-transparent bg-white py-3 w-full px-2 text-base font-medium text-gray-900 hover:bg-gray-100 flex justify-start items-start"
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