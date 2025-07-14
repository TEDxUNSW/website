"use client";

import { useState } from "react";
import isEmail from "validator/es/lib/isEmail";
import Logo from "../public/logo-no-color.svg";

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_URL ?? "https://tedxunsw.com.au/nowhere";

export default function Footer() {
  const [email, setEmail] = useState<string>("");

  const sendEmailToWebhook = async (email: string) => {
    const toSend = email.trim();
    if (!isEmail(toSend)) {
      return;
    }
    setEmail("");

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `New email subscription: ${email}`,
      }),
    });
  };

  return (
    <footer className="text-white relative overflow-hidden bg-[rgb(226,72,67)]">
      {/* <div className="absolute z-0 w-full h-full bottom-0">
        <div className="flex flex-col justify-end items-center w-full h-full">
          <Wave className="object-cover w-[400%] h-auto" />
          <div className="bg-[rgb(226,72,67)] h-[80%] w-full"></div>
        </div>
      </div> */}

      <div className="relative z-10 pt-10 w-[75%] mx-auto pb-10">
        <div className="w-[80%] mx-auto">
          {/* <h1 className="text-center text-8xl font-bold">TEDxUNSW</h1> */}
          <div className="flex flex-col md:flex-row justify-center text-black">
            <p className="text-3xl font-bold text-center md:text-left">
              Sign up for email updates from TEDxUNSW
            </p>
            <div className="flex flex-row items-center mt-0">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 underline underline-offset-10 decoration-black placeholder:text-black text-2xl font-bold "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="mt-4 md:mt-0 md:ml-4 p-2 bg-black text-white"
                onClick={() => sendEmailToWebhook(email)}
              >
                Submit
              </button>
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
            {/* <p className="text-2xl font-bold">2025</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
