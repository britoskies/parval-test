import type { InputProps } from "../../features/requests/types/form";

const Input = (props: InputProps) => {
  const { register, type, label, placeholder, selectOptions, errorMessage } =
    props;

  return (
    <div className="flex flex-col">
      <label className="text-[#111418] text-base font-medium pb-2">
        {label}
      </label>

      {type === "text" && (
        <input
          {...register}
          placeholder={placeholder}
          className="form-input w-full h-14 rounded-lg border border-[#dbe0e6] bg-white px-4 placeholder:text-[#60758a] focus:outline-none focus:ring-0 focus:border-[#dbe0e6]"
        />
      )}

      {type === "select" && (
        <select
          {...register}
          className="form-input w-full h-14 rounded-lg border border-[#dbe0e6] bg-white px-4 placeholder:text-[#60758a] focus:outline-none focus:ring-0 focus:border-[#dbe0e6] bg-[image:var(--select-button-svg)] bg-no-repeat bg-right"
        >
          <option value="" disabled hidden>
            {selectOptions?.[0]?.selectOption}
          </option>
          {selectOptions?.map((option) => (
            <option value={option.selectValue}>{option.selectOption}</option>
          ))}
        </select>
      )}

      {type === "textarea" && (
        <textarea
          {...register}
          placeholder={placeholder}
          className="form-input w-full min-h-[144px] rounded-lg border border-[#dbe0e6] bg-white p-4 placeholder:text-[#60758a] focus:outline-none focus:ring-0 focus:border-[#dbe0e6]"
        />
      )}

      <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
    </div>
  );
};

export default Input;
