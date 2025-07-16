import React from "react";
import clsx from "clsx";
import type {
  ButtonProps,
  ButtonVariant,
} from "../../types/button";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#0c7ff2] text-white hover:bg-[#095dc1]",
  secondary: "bg-[#f0f2f5] text-[#111418] hover:bg-[#e0e3e8]",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "min-w-[84px] h-10 px-4 text-sm font-bold rounded-lg transition",
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
