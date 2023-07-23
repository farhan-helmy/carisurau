/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import dynamic from "next/dynamic";
import { api } from "../../utils/api";
import LoadingSpinner from "./LoadingSpinner";

const Select = dynamic(() => import("react-select"), {
  ssr: true,
});

type StateSelectProps = {
  handleNegeriChange: (e: any) => void;
  label: boolean;
};

const StateSelect: React.FC<StateSelectProps> = ({
  handleNegeriChange,
  label,
}) => {

  const { data, isLoading } = api.surau.getState.useQuery();
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2">
          {label ? (
            <label
              htmlFor="surau-name"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
          ) : null}
          <div className="relative z-20 mt-1 w-full rounded-md shadow-sm">
            <Select
              options={data}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              onChange={(e) => handleNegeriChange(e)}
              required
              placeholder="State"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StateSelect;
