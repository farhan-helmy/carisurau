/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { api } from "../../utils/api";

const StatsCard = () => {
  const { data, isLoading } = api.profile.getInfo.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-2 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <GlobeAsiaAustraliaIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Surau
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {data?.Surau.length}
            </p>
            {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View all<span className="sr-only"> Surau stats</span>
                </a>
              </div>
            </div> */}
          </dd>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-2 pt-5 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-indigo-500 p-3">
              <GlobeAsiaAustraliaIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Reviews
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {data?.Rating.length}
            </p>
            {/* <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View all<span className="sr-only"> Ratings stats</span>
                </a>
              </div>
            </div> */}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default StatsCard;
