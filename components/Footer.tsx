"use client";

import Wave from "../public/wave.svg";
import Logo from "../public/logo-no-color.svg";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [cursor, setCursor] = useState('crosshair');

  return (
    <footer className="text-white relative overflow-hidden">
      <div className="absolute z-0 w-full h-full bottom-0">
        <div className="flex flex-col justify-end items-center w-full h-full">
          <Wave className="object-cover w-[400%] h-auto" />
          <div className="bg-[rgb(226,72,67)] h-[80%] w-full"></div>
        </div>
      </div>

      <div className="relative z-10 pt-64 w-[75%] mx-auto pb-20">
        <div className="w-[80%] mx-auto">
          <h1 className="text-center text-8xl font-bold">TEDxUNSW</h1>
          <div className="flex flex-row justify-center text-black">
            <p className="text-4xl font-bold">
              Sign up for email updates from TEDxUNSW
            </p>
            <div className="flex flex-row items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="ml-4 p-2 underline underline-offset-10 decoration-black placeholder:text-black text-2xl text-bold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
              <button className="ml-4 p-2 bg-black text-white" onClick={() => setEmail("")}>Submit</button>
            </div>
          </div>
        </div>
        <div className="text-black">
          <hr className="mx-auto my-4 border-t-1 border-black" />
          <div className="flex flex-row justify-between">
            <div>
              <Logo className="w-auto" />
              <p>
                This independent TEDx event is operated under license from TED.
              </p>
            </div>
            <p className="text-2xl font-bold">2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
