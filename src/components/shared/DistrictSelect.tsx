/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import dynamic from "next/dynamic";
import { api } from "../../utils/api";
import LoadingSpinner from "./LoadingSpinner";

const Select = dynamic(() => import("react-select"), {
  ssr: true,
});

type DistrictSelectProps = {
  handleDaerahChange: (e: any) => void;
  choosenState: string;
  label: boolean;
};

const DistrictSelect: React.FC<DistrictSelectProps> = ({
  handleDaerahChange,
  choosenState,
  label,
}) => {
  const { data, isLoading } = api.surau.getDistrict.useQuery({
    id: choosenState,
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2">
          {label ? (
            <label className="block text-sm font-medium text-gray-700">
              District
            </label>
          ) : null}

          <div className="relative z-10 mt-1 block w-full rounded-md shadow-sm">
            <Select
              options={data}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              onChange={(e) => handleDaerahChange(e)}
              required
              placeholder="District"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistrictSelect;
