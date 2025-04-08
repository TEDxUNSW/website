import Image from 'next/image'
import logo from "../public/logo-black-svg.svg"
import hamburg from "../public/hamburg.svg"
import facebook from "../public/facebook.svg"
import insta from "../public/instagram.svg"

export default function NavBar({
  }) {
    return (
      <header>
        <div className="flex flex-row items-center bg-white text-black h-15">
          <Image className="flex-8 shrink-0 grow-0" src={logo} alt="TEDxUNSW logo" width="130"/>
          <div className="max-[42rem]:flex-20 min-[42rem]:flex-1 min-[43rem]:flex-2 min-[47rem]:flex-3 md:flex-4 lg:flex-5"></div>
          <div className="flex flex-auto shrink-0 justify-between">
            <div className="flex max-[37rem]:hidden flex-30 shrink-0 justify-between items-center font-helvetica text-1xl font-bold">
              <div className="flex-none px-1">Events</div>
              <div className="flex-none px-1">About</div>
              <div className="flex-none px-1">Subscribe</div>
              <div className="flex-none px-1">Participate</div>
              <div className="flex-none px-1">Tickets</div>
            </div>
            <div className="max-[37rem]:hidden flex-1"></div>
            <div className="flex flex-auto justify-between items-center font-helvetica text-2xl">
                <Image src={insta} alt="Our Instagram" className="flex-none px-0.5 "/>
                <Image src={facebook} alt="Our Facebook" className="flex-none px-0.5"/>
                <Image src={hamburg} alt="Options" className="flex-none pr-3.0"/>
                <div/>                
            </div>
          </div>
        </div>
      </header>
    );
  }
