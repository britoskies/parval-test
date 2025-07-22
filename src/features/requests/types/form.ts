import type { UseFormRegisterReturn } from "react-hook-form";

type SelectOptions = {
  selectOption: string;
  selectValue: string;
};

export type InputProps = {
  type: "text" | "email" |"textarea" | "select" | "number";
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  value?: string | number;
  errorMessage?: string;
  selectOptions?: SelectOptions[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>
};
