import Logo from "../public/logos/logo-black-svg.svg";
import Facebook from "../public/logos/facebook.svg";
import Instagram from "../public/logos/instagram.svg";
import Link from "next/link";

export default function NavBar({}) {
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-white text-black h-15 w-full pr-2">
        <div className="flex flex-row h-15">
          <Link href="/">
            <Logo className="shrink-0 grow-0 h-15" width={180} />
          </Link>
          <Link href="/about" className="flex-0 pt-5 pb-5 pl-2 z-10">
            <div className="font-helvetica text-[18px] font-bold ">
              <p>About</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4">
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
        </div>
      </div>
    </header>
  );
}
