"use client";
import Logo from "../public/logos/logo-black-svg.svg";
import Hamburg from "../public/hamburg.svg";
import Close from "../public/closeHamburg.svg";
import Facebook from "../public/logos/facebook.svg";
import Instagram from "../public/logos/instagram.svg";
import Link from "next/link";
import { useState } from "react";

export default function NavBar({}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header>
      <div>
        <div className="flex flex-row items-center justify-between bg-white text-black h-15 w-full px-4">
          <Link href="/">
            <Logo className="shrink-0 grow-0" width={180} />
          </Link>

          <div className="max-[42rem]:flex-20 min-[42rem]:flex-1 min-[43rem]:flex-2 min-[47rem]:flex-3 md:flex-4 lg:flex-5"/>
          <div className="flex flex-auto shrink-0 justify-between">
            <div className="flex flex-auto items-center font-helvetica text-2xl w-30 justify-end">
              <a
                href="https://www.instagram.com/tedxunsw/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <Instagram className="shrink-0 grow-0" width={25} />
              </a>
              <a
                href="https://www.facebook.com/TEDxUNSW"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <Facebook className="shrink-0 grow-0" width={25} />
              </a>

              <button onClick={() => setIsOpen(!isOpen)} className="hover-bg-transparent p-3">
                {isOpen ? <Close className="w-7 h-7"/> : <Hamburg className="shrink-0 grow-0 pr-3.0" width={25}/> }
             </button>
            </div>
          </div>
        </div>

        <div style={{ visibility: isOpen? 'visible' : 'hidden' }} 
          className="flex flex-col absolute right-0 bg-foreground text-background h-screen w-40  justify-center items-center font-helvetica text-1xl font-bold">
          <Link href="/events" className="flex-none p-5">
            Events
          </Link>

          <Link href="/about" className="flex-none p-5">
            About
          </Link>

          <Link href="/subscribe" className="flex-none p-5">
            Subscribe
          </Link>

          <Link href="/participate" className="flex-none p-5">
            Participate
          </Link>

          <Link href="/prevEvents" className="flex-none p-5">
            Previous Events
          </Link>

          <Link href="/tickets" className="flex-none p-5">
            Tickets
          </Link>
         </div>
      </div>
    </header>
  );
}
