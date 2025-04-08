import Logo from "../public/logo-black-svg.svg";
import Hamburg from "../public/hamburg.svg";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";

export default function NavBar({}) {
  return (
    <header>
      <div className="flex flex-row items-center bg-white text-black h-15">
        <Logo className="shrink-0 grow-0" width={180} />
        <div className="max-[42rem]:flex-20 min-[42rem]:flex-1 min-[43rem]:flex-2 min-[47rem]:flex-3 md:flex-4 lg:flex-5"></div>
        <div className="flex flex-auto shrink-0 justify-between">
          <div className="flex max-[42rem]:hidden flex-30 shrink-0 justify-between items-center font-helvetica text-1xl font-bold">
            <div className="flex-none px-1">Events</div>
            <div className="flex-none px-1">About</div>
            <div className="flex-none px-1">Subscribe</div>
            <div className="flex-none px-1">Participate</div>
            <div className="flex-none px-1">Tickets</div>
          </div>
          <div className="max-[42rem]:hidden flex-1"></div>
          <div className="flex flex-auto justify-between items-center font-helvetica text-2xl w-30 pl-2">
            <Instagram className="shrink-0 grow-0" width={25} />
            <Facebook className="shrink-0 grow-0" width={25} />
            <Hamburg className="shrink-0 grow-0 pr-3.0" width={25} />
            <div />
          </div>
        </div>
      </div>
    </header>
  );
}
