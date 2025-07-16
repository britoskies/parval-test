import type { UseFormRegisterReturn } from "react-hook-form";

type SelectOptions = {
  selectOption: string;
  selectValue: string;
};

export type InputProps = {
  type: "text" | "textarea" | "select";
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  errorMessage?: string;
  selectOptions?: SelectOptions[];
};

