"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { RxCaretDown } from "react-icons/rx";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export default function CategoriesSelect() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <div className="relative">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <ListboxButton className="min-w-[220px] flex items-center justify-between gap-3 bg-w1 px-3 py-2 rounded-lg outline-none">
          {selectedPerson.name}
          <span className="text-2xl">
            <RxCaretDown />
          </span>
        </ListboxButton>
        <ListboxOptions className="absolute top-11 bg-w1 w-full px-3 py-2 rounded-lg border border-b1/20 outline-none">
          {people.map((person) => (
            <ListboxOption key={person.id} value={person} as={Fragment}>
              {({ selected }) => (
                <div
                  className={clsx(
                    "flex gap-2 px-2 py-1 rounded",
                    selected && "bg-p1 text-w1 font-medium"
                  )}
                >
                  {person.name}
                </div>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
