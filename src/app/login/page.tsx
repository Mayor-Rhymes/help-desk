"use client";

import { Input, Button, Checkbox } from "@headlessui/react";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full  flex items-center justify-center">
      <form className="py-6 px-10 lg:px-0 w-full lg:w-[30%] flex flex-col gap-6 items-center">
        <h4 className="text-3xl">Login</h4>
        <div className="flex w-full lg:w-96 flex-col gap-2">
          <label>Email Address</label>
          <Input
            placeholder="Enter your email address"
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

        <Button
          type="submit"
          className="bg-blue-400 hover:bg-blue-600 w-full lg:w-96 text-white p-3 rounded-md"
        >
          Submit
        </Button>


        <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
      </form>
    </div>
  );
}
