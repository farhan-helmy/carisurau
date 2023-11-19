/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client"
import clsx from "clsx";
import { controlStyles, optionStyles, placeholderStyles, inputStyles, singleValueStyles, indicatorSeparatorStyles, dropdownIndicatorStyles, menuStyles, noOptionsStyles } from '../../styles/selectStyles';
import Select from "react-select";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

type DistrictSelectProps = {
  handleDaerahChange: (e: any) => void;

  label: boolean;
  cities: {
    id: string;
    name: string;
  }[];

};

const DistrictSelect: React.FC<DistrictSelectProps> = ({
  handleDaerahChange,
  label,
  cities
}) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [cities])

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2">
          {label ? (
            <label className="block text-sm font-medium text-input-foreground">
              City
            </label>
          ) : null}

          <div className="relative z-10 mt-1 block w-full rounded-md shadow-sm">
            <Select
              options={cities}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              onChange={(e) => handleDaerahChange(e)}
              required
              placeholder="City"
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
