/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import dynamic from "next/dynamic";
import { api } from "../../utils/api";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect } from "react";
import clsx from "clsx";
import {controlStyles, optionStyles, placeholderStyles, inputStyles, singleValueStyles, indicatorSeparatorStyles, dropdownIndicatorStyles, menuStyles, noOptionsStyles} from '../../styles/selectStyles';

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
  const { data, isLoading, refetch } = api.surau.getDistrict.useQuery({
    id: choosenState,
  });

  useEffect(() => {
    void refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choosenState]);

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2">
          {label ? (
            <label className="block text-sm font-medium text-input-foreground">
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
              unstyled
              classNames={{
                control: ({ isFocused }) =>
                  clsx(
                    isFocused ? controlStyles.focus : controlStyles.nonFocus,
                    controlStyles.base
                  ),
                placeholder: () => placeholderStyles,
                input: () => inputStyles,
                singleValue: () => singleValueStyles,
                indicatorSeparator: () => indicatorSeparatorStyles,
                dropdownIndicator: () => dropdownIndicatorStyles,
                menu: () => menuStyles,
                option: ({ isFocused, isSelected }) =>
                  clsx(
                    isFocused && optionStyles.focus,
                    isSelected && optionStyles.selected,
                    optionStyles.base
                  ),
                noOptionsMessage: () => noOptionsStyles,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistrictSelect;
