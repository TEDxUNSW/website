import Image from 'next/image'
import logo from "../public/logo-black-svg.svg"
import hamburg from "../public/hamburg.svg"
import facebook from "../public/facebook.svg"
import insta from "../public/instagram.svg"



export default function NavBar({
  }) {
    return (
      <header>
        
        <div className="flex justify-between items-center bg-white text-black">
          <div className="w-50 flex-none ">
            <Image src={logo} alt="TEDxUNSW logo"/>
          </div>
          <div className="w-160 flex justify-between">
            <div className="w-130 flex justify-between items-center font-helvetica text-2xl">
              <div className="flex-initial">Events</div>
              <div className="flex-initial">About</div>
              <div className="flex-initial">Subscribe</div>
              <div className="flex-initial">Participate</div>
              <div className="flex-initial">Tickets</div>
            </div>
            <div className="w-25 flex justify-between items-center font-helvetica text-2xl">
              <div className="flex-initial">
                <Image src={insta} alt="Our Instagram"/>
              </div>
              <div className="flex-initial">
                <Image src={facebook} alt="Our Facebook"/>
              </div>
              <div className="flex-initial">
                <Image src={hamburg} alt="Options"/>
              </div>
            </div>
          </div>
        </div>


      </header>
    );
  }