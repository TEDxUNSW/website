"use client";
import Logo from "../../public/logos/logo-black-svg.svg";
import Facebook from "../../public/logos/facebook.svg";
import Instagram from "../../public/logos/instagram.svg";
import Link from "next/link";

export default function NavBar({}) {
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
                <Link href="/events" className="flex-none p-5 text-md">
                    Events
                </Link>

                <Link href="/about" className="flex-none p-5 text-md">
                    About
                </Link>

                <Link href="/subscribe" className="flex-none p-5 text-md">
                    Subscribe
                </Link>

                <Link href="/participate" className="flex-none p-5 text-md">
                    Participate
                </Link>

                <Link href="/tickets" className="flex-none p-5 text-md">
                    Tickets
                </Link>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}