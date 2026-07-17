"use client";

import * as React from "react";
import ReactPhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { cn } from "@/lib/utils";

type PhoneInputProps = Omit<React.ComponentProps<typeof ReactPhoneInput>, 'numberInputProps'> & {
  inputClassName?: string;
};

function PhoneInput({ className, inputClassName, onChange = () => {}, ...props }: PhoneInputProps) {
  return (
    <ReactPhoneInput
      international
      defaultCountry="KH"
      className={cn(
        "w-full rounded-lg border border-input bg-transparent text-base outline-none focus:border-ring focus:ring-2 focus:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      numberInputProps={{
        className: cn(
          "h-10 w-full rounded-lg border-0 bg-transparent px-3 py-2 text-sm outline-none",
          inputClassName
        ),
      }}
      onChange={onChange}
      {...props}
    />
  );
}

export { PhoneInput };
