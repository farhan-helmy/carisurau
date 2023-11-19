/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import dynamic from "next/dynamic";
import { controlStyles, optionStyles, placeholderStyles, inputStyles, singleValueStyles, indicatorSeparatorStyles, dropdownIndicatorStyles, menuStyles, noOptionsStyles } from '../../styles/selectStyles';
import clsx from "clsx";
import { getStates } from "malaysia-postcodes";

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

  const states = getStates().map((state) => {
    return {
      id: state,
      name: state,
    };
  });
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3 md:col-span-2">
          {label ? (
            <label
              htmlFor="surau-name"
              className="block text-sm font-medium text-input-foreground"
            >
              State
            </label>
          ) : null}
          <div className="relative z-20 mt-1 w-full rounded-md shadow-sm">
            <Select
              options={states}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              onChange={(e) => handleNegeriChange(e)}
              required
              placeholder="State"
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
    </>
  );
};

export default StateSelect;
