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

  const showMenu = () => {
    if(isOpen == true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-white text-black h-15 w-full px-4">
        <Link href="/">
          <Logo className="shrink-0 grow-0" width={180} />
        </Link>
        {/* <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/tedxunsw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="shrink-0 grow-0" width={25} />
          </a>
          <a
            href="https://www.facebook.com/TEDxUNSW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="shrink-0 grow-0" width={25} />
          </a>
        </div> */}
        
        <div className="max-[42rem]:flex-20 min-[42rem]:flex-1 min-[43rem]:flex-2 min-[47rem]:flex-3 md:flex-4 lg:flex-5"></div>
        <div className="flex flex-auto shrink-0 justify-between">
          <button onClick={() => setIsOpen(!isOpen)} className="hover-bg-transparent">
            {isOpen ? <Close className="w-7 h-7"/> : <Hamburg className="shrink-0 grow-0 pr-3.0" width={25}/> }
          </button>

          <div style={{visibility: isOpen ? 'visible' : 'hidden'}} className="flex flex-col">
            <div className="flex max-[42rem]:hidden flex-30 shrink-0 justify-between items-center font-helvetica text-1xl font-bold">
              <Link href="/events" className="flex-none px-1">
                Events
              </Link>
              <Link href="/about" className="flex-none px-1">
                About
              </Link>
              <Link href="/subscribe" className="flex-none px-1">
                Subscribe
              </Link>
              <Link href="/participate" className="flex-none px-1">
                Participate
              </Link>
              <Link href="/tickets" className="flex-none px-1">
                Tickets
              </Link>
            </div>
            <div className="max-[42rem]:hidden flex-1"></div>
            <div className="flex flex-auto justify-between items-center font-helvetica text-2xl w-30 pl-2">
              <a
                href="https://www.instagram.com/tedxunsw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="shrink-0 grow-0" width={25} />
              </a>
              <a
                href="https://www.facebook.com/TEDxUNSW"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="shrink-0 grow-0" width={25} />
              </a>
            <div />
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}
