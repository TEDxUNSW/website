import Logo from "../public/logo-black-svg.svg";
import Hamburg from "../public/hamburg.svg";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import Link from "next/link";

export default function NavBar({}) {
  return (
    <header>
      <div className="flex flex-row items-center bg-white text-black h-15">
        <Link href="/">
          <Logo className="shrink-0 grow-0" width={180} />
        </Link>
        <div className="max-[42rem]:flex-20 min-[42rem]:flex-1 min-[43rem]:flex-2 min-[47rem]:flex-3 md:flex-4 lg:flex-5"></div>
        <div className="flex flex-auto shrink-0 justify-between">
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
            <Hamburg className="shrink-0 grow-0 pr-3.0" width={25} />
            <div />
          </div>
        </div>
      </div>
    </header>
  );
}
