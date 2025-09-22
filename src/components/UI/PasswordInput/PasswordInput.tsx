"use client";

import { useState } from "react";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

type passwordInputProps = {
  id: string;
  label: string;
  placeholder: string;
};

const PasswordInput = ({ id, label, placeholder }: passwordInputProps) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-base md:text-lg font-medium block">
        {label}
      </label>
      <div className="w-full  border border-b1/20 mt-1 md:mt-2 rounded-md relative">
        <input
          type={showPassword ? "password" : "text"}
          placeholder={placeholder}
          id={id}
          required
          className="w-full outline-none py-2 md:py-3 px-3 md:px-5"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 text-xl md:text-2xl top-1/2 -translate-y-1/2 cursor-pointer z-1"
        >
          {showPassword ? <PiEyeSlashLight /> : <PiEyeLight />}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
