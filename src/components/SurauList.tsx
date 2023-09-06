/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { api } from "../utils/api";
import Badge from "./shared/Badge";
import Link from "next/link";

const SurauList = ({
  type,
  userDistrict,
  userState,
}: {
  type: "new" | "recent";
  userDistrict: string;
  userState: string;
}) => {
  const latestAddedSurau = api.surau.getLatestAddedSurau.useQuery({
    district: userDistrict,
    state: userState,
  });

  if (type === "new") {
    const pendingApprovalList = api.surau.getPendingApproval.useQuery();

    return (
      <div className="bg-background">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Surau</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {pendingApprovalList.data?.map((surau) => (
              <div key={surau.id} className="group">
                <Link
                  className=" w-full overflow-hidden rounded-lg bg-primary xl:aspect-w-1 xl:aspect-h-1"
                  href={`/${surau.unique_name}`}
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
                </Link>
                <h3 className="mt-4 text-sm text-gray-700">
                  {surau.district.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-foreground">
                  {surau.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-2xl py-2 px-4 shadow-lg sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Surau</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 p-2 sm:grid-cols-2 md:p-0 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6">
          {latestAddedSurau.isLoading ? (
            <div>Loading...</div>
          ) : latestAddedSurau.isError ? (
            <div>Error: {latestAddedSurau.error.message}</div>
          ) : (
            latestAddedSurau.data?.map((surau) => (
              <div key={surau.id} className="group flex flex-col">
                <Link
                  className="h-full overflow-hidden rounded-xl bg-primary object-fill"
                  href={`/${surau.unique_name}`}
                >
                  {surau.images.some((image) => image.is_thumbnail) ? (
                    // Display the image marked as thumbnail
                    <Image
                      src={
                        surau.images.find((image) => image.is_thumbnail)
                          ?.file_path || ""
                      }
                      alt={
                        surau.images.find((image) => image.is_thumbnail)?.id ||
                        ""
                      }
                      width={500}
                      height={500}
                      className="h-full w-full object-cover group-hover:opacity-75"
                    />
                  ) : surau.images[0]?.file_path ? (
                    // Display the first image
                    <Image
                      src={surau.images[0]?.file_path}
                      alt={surau.images[0]?.id}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover group-hover:opacity-75"
                    />
                  ) : (
                    // Display the default image
                    <Image
                      src="/assets/background/carisuraudefault.png"
                      alt="default"
                      width={500}
                      height={500}
                      className="h-full w-full object-cover group-hover:opacity-75"
                    />
                  )}
                </Link>
                {/* <h3 className="mt-4 text-sm text-gray-700">{surau.location}</h3> */}
                <div className="mt-1 flex justify-between">
                  <p className="truncate text-start text-lg font-medium text-foreground">
                    {surau.name}
                  </p>
                </div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {surau?.is_solat_jumaat && (
                    <Badge color="green" text="Solat Jumaat" />
                  )}
                  {surau?.is_qiblat_certified && (
                    <Badge color="purple" text="Qiblat Certified" />
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SurauList;
