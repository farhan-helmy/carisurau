/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "../utils/api";

const SurauList = ({ type }: { type: "new" | "recent" }) => {
  const latestAddedSurau = api.surau.getLatestAddedSurau.useQuery();

  const router = useRouter();

  const handleRouterPush = (e: React.FormEvent, surauName: string) => {
    e.preventDefault();
    void router.push(`/surau/${surauName}`);
  };

  if (type === "new") {
    const pendingApprovalList = api.surau.getPendingApproval.useQuery();

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Surau</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {pendingApprovalList.data?.map((surau) => (
              <a key={surau.id} href={surau.name} className="group">
                <div
                  className=" w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-1 xl:aspect-h-1"
                  onClick={(e) => handleRouterPush(e, surau.name)}
                >
                  {surau.images[0]?.file_path ? (
                    <Image
                      src={surau.images[0]?.file_path}
                      alt={surau.images[0].id}
                      className="h-full w-full object-fill object-center group-hover:opacity-75"
                      width={500}
                      height={200}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {surau.district.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {surau.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl py-2 px-4 shadow-lg sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Surau</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 p-2 sm:grid-cols-2 md:p-0 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6">
          {latestAddedSurau.isLoading ? (
            <div>Loading...</div>
          ) : latestAddedSurau.isError ? (
            <div>Error: {latestAddedSurau.error.message}</div>
          ) : (
            latestAddedSurau.data?.map((surau) => (
              <a key={surau.id} href="#" className="group">
                <div
                  className="max-h-72 overflow-hidden rounded-xl bg-gray-200 object-fill"
                  onClick={(e) => handleRouterPush(e, surau.unique_name)}
                >
                  {surau.images[0]?.file_path ? (
                    <div className="flex h-72 items-center justify-center">
                      <Image
                        src={surau.images[0]?.file_path}
                        alt={surau.images[0].id}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover group-hover:opacity-75"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="flex h-72 w-auto items-center justify-center">
                        <Image
                          src="/assets/background/carisuraudefault.png"
                          alt="default"
                          className="h-64 w-auto object-contain group-hover:opacity-75"
                          width={500}
                          height={500}
                        />
                      </div>
                    </>
                  )}
                </div>
                {/* <h3 className="mt-4 text-sm text-gray-700">{surau.location}</h3> */}
                <p className="mt-1 text-lg font-medium text-gray-900 text-start truncate">
                  {surau.name}
                </p>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SurauList;
