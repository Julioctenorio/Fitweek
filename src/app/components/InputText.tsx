import React, { ChangeEvent } from "react";

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  text: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
};

export default function InputText(props: InputTextProps) {
  const { type, text, id = "input-text", value, onChange, required, ...rest } = props;

  return (
    <>
      <label htmlFor={id} className="relative w-80 h-15 mb-4"> 
        <input
          type={type}
          id={id}
          placeholder=""
          className="peer m-0.5 w-full h-12 pl-4 rounded-lg border-gray-300 shadow-sm sm:text-sm no-spinners dark:border-gray-600 dark:bg-neutral-800 dark:text-white"
          value={value}
          onChange={onChange}
          required={required}
          autoComplete="off"
          {...rest}
        />

        <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-transparent dark:text-white">
          {text}
        </span>
      </label>
    </>
  );
}
