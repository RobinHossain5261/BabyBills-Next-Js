"use client";
import { useState, useRef, useEffect } from "react";
import { PiCaretDown } from "react-icons/pi";

const catagories = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

export default function CustomSelect() {
  const [selected, setSelected] = useState(catagories[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative hidden sm:block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-max md:min-w-[220px] flex items-center justify-between gap-3 bg-w1 px-3 py-2 rounded-lg outline-none cursor-pointer"
      >
        {selected}
        <span className={`${open ? "-rotate-180" : ""} duration-300`}>
          <PiCaretDown />
        </span>
      </button>

      {/* Always rendered dropdown with animation */}
      <div
        className={`absolute z-10 mt-1 w-full rounded bg-w1 shadow-lg overflow-y-auto transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="divide-y divide-gray-100">
          {catagories.map((catagory) => (
            <li
              key={catagory}
              className="px-4 py-2 hover:bg-p1/10 cursor-pointer text-sm"
              onClick={() => {
                setSelected(catagory);
                setOpen(false);
              }}
            >
              {catagory}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
