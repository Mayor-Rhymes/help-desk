"use client";

import { Input, Button, Checkbox } from "@headlessui/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Department {
  id: number;
  name: string;
}

const departments: Department[] = [
  { id: 1, name: "Human Resources" },
  { id: 2, name: "Information Technology" },
  { id: 3, name: "Reservations and Ticketing" },
  { id: 4, name: "Administrative" },
  { id: 5, name: "Business Development" },
  { id: 6, name: "Mice and Leisure" },
  { id: 7, name: "Finance and Account" },
  { id: 8, name: "Quality Control" },
];
export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const [department, setDepartment] = useState(departments[0]);


  

  return (
    <div className="h-full  flex items-center justify-center">
      <form className="py-6 px-10 lg:px-0 w-full lg:w-[30%] flex flex-col gap-6 items-center">
        <h4 className="text-3xl">Signup</h4>
        <div className="flex w-full lg:w-96 flex-col gap-2">
          <label>Username</label>
          <Input
            placeholder="Enter your username"
            className="p-3 lg:w-96 border focus:outline-blue-400 rounded"
          />
        </div>
        <div className="flex w-full flex-col lg:w-96 gap-2">
          <label>Password</label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="p-3 lg:w-96 border focus:outline-blue-400 rounded"
          />
        </div>

        <div className="flex w-full lg:w-96 gap-5">
          <Checkbox
            checked={showPassword}
            onChange={setShowPassword}
            className="group size-6 rounded-md bg-green/10 p-1 ring-1 ring-black/15 ring-inset data-[checked]:bg-white cursor-pointer"
          >
            <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
          </Checkbox>
          <p>Show password</p>
        </div>

        <Listbox value={department} onChange={setDepartment}>
          <ListboxButton className="flex justify-between w-full lg:w-96 bg-slate-100 p-3 rounded-md">
            {department.name}
            <ChevronDownIcon />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className="w-full lg:w-96 gap-3 bg-slate-200 mt-2 rounded-md"
          >
            {departments.map((department) => (
              <ListboxOption
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-blue-100"
                key={department.id}
                value={department}
              >
                <p>{department.name}</p>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>

        <Button
          type="submit"
          className="bg-blue-400 hover:bg-blue-600 w-full lg:w-96 text-white p-3 rounded-md"
        >
          Submit
        </Button>

        <p>
          Don't have an account? <Link href="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
