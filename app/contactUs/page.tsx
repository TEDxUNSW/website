"use client";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <>
      <div className="justify-items-center">
        <h1 className="text-3xl font-bold p-3 md:mx-30 max-md:mx-10">
          Contact Us
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 w-1vw md:mx-20 max-md:mx-10 lg:w-220 ">
          <div className="relative flex-1 h-85 max-[350px]:h-70 min-[350px]:max-sm:h-105 xs:h-110 md:h-95 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2 justify-items-center text-center">
            <div className="relative w-99/100 h-full justify-items-center">
              <h2 className="text-2xl font-bold h-15">
                Nominations For Speakers
              </h2>
              <Image
                src="/logos/speak.svg"
                alt="TEDxUNSW"
                width={100}
                height={500}
                className="max-[270px]:hidden"
              />
              <p className="mb-5 md:max-lg:mt-2 sm:max-md:mt-0 sm:max-md:mb-0 mt-5 max-[350px]:hidden">
                If you are know someone who would be a good speaker for a future
                TEDxUNSW events, send an email to us
                <a
                  href="mailto:tedxunswcurations@gmail.com"
                  className="text-blue-500"
                >
                  &nbsp;here&nbsp;
                </a>
                alongside their credentials so we keep in contact.
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("tedxunswcurations@gmail.com");
                }}
                id="a"
                className="absolute w-full h-15 rounded-lg bg-red-500 focus:outline-2 focus:outline-off-red active:bg-red-500 text-white bottom-2 left-0"
              >
                Copy Email
              </button>
            </div>
          </div>
          <div className="relative flex-1 h-80 max-[350px]:h-70 min-[350px]:max-sm:h-105 xs:h-110 md:h-95 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2 justify-items-center text-center">
            <div className="relative w-99/100 h-full justify-items-center">
              <h2 className="text-2xl font-bold h-15">
                Looking to Sponsor an Event?
              </h2>
              <Image
                src="/logos/sponsor.svg"
                alt="TEDxUNSW"
                width={100}
                height={500}
                className="max-[270px]:hidden"
              />
              <p className="mb-5 md:max-lg:mt-2 sm:max-md:mt-0 sm:max-md:mb-0 mt-5 max-[350px]:hidden">
                Looking to sponsor a TEDxUNSW event? Please email us
                <a
                  href="mailto:tedxunswsponsorships@gmail.com"
                  className="text-blue-500"
                >
                  &nbsp;here
                </a>
                .
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "tedxunswsponsorships@gmail.com",
                  );
                }}
                id="a"
                className="absolute w-full h-15 rounded-lg bg-red-500 focus:outline-2 focus:outline-off-red active:bg-red-500 text-white bottom-2 left-0"
              >
                Copy Email
              </button>
            </div>
          </div>
          <div className="relative flex-1 h-80 max-[350px]:h-70 min-[350px]:max-sm:h-105 xs:h-110 md:h-95 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2 justify-items-center text-center">
            <div className="relative w-99/100 h-full justify-items-center">
              <h2 className="text-2xl font-bold h-15">
                Cross Society Collaboration
              </h2>
              <Image
                src="/logos/soc.svg"
                alt="TEDxUNSW"
                width={100}
                height={500}
                className="max-[270px]:hidden"
              />
              <p className="mb-5 md:max-lg:mt-2 sm:max-md:mt-0 sm:max-md:mb-0 mt-5 max-[350px]:hidden">
                If you are a UNSW student society looking for an opportunity for
                promotion of your club or society then you should contact us
                <a
                  href="mailto:tedxunswsponsorships@gmail.com"
                  className="text-blue-500"
                >
                  &nbsp;here
                </a>
                .
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "tedxunswsponsorships@gmail.com",
                  );
                }}
                id="a"
                className="absolute w-full h-15 rounded-lg bg-red-500 focus:outline-2 focus:outline-off-red active:bg-red-500 text-white bottom-2 left-0"
              >
                Copy Email
              </button>
            </div>
          </div>
          <div className="relative flex-1 h-80 max-[350px]:h-70 min-[350px]:max-sm:h-105 xs:h-110 md:h-95 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2 justify-items-center text-center">
            <div className="relative w-99/100 h-full   justify-items-center">
              <h2 className="text-2xl font-bold h-15">
                Volunteering for Events
              </h2>
              <Image
                src="/logos/vol.svg"
                alt="TEDxUNSW"
                width={100}
                height={500}
                className="max-[270px]:hidden"
              />
              <p className="mb-5 md:max-lg:mt-2 sm:max-md:mt-0 sm:max-md:mb-0 mt-5 max-[350px]:hidden">
                Are you a performer, a photographer or do you have skills useful
                for a TEDxUNSW event? Volunteer for our events. Please contact
                us
                <a
                  href="mailto:tedxunswcurations@gmail.com"
                  className="text-blue-500"
                >
                  &nbsp;here
                </a>
                .
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("tedxunswcurations@gmail.com");
                }}
                id="a"
                className="absolute w-full h-15 rounded-lg bg-red-500 focus:outline-2 focus:outline-off-red active:bg-red-500 text-white bottom-2 left-0"
              >
                Copy Email
              </button>
            </div>
          </div>
          <div className="relative flex-1 h-80 max-[350px]:h-70 min-[350px]:max-sm:h-105 xs:h-110 md:h-95 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2 justify-items-center text-center">
            <div className="relative w-99/100 h-full justify-items-center">
              <h2 className="text-2xl font-bold h-15">
                Looking to Join the Society?
              </h2>
              <Image
                src="/logos/add.svg"
                alt="TEDxUNSW"
                width={100}
                height={500}
                className="max-[270px]:hidden"
              />
              <p className="mb-5 md:max-lg:mt-2 sm:max-md:mt-0 sm:max-md:mb-0 mt-5 max-[350px]:hidden">
                Applications are not currently open, please check back at the
                end of the year or if you have any questions about the
                application process email
                <a href="mailto:tedxunsw@gmail.com" className="text-blue-500">
                  &nbsp;here
                </a>
                .
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("tedxunsw@gmail.com");
                }}
                id="a"
                className="absolute w-full h-15 rounded-lg bg-red-500 focus:outline-2 focus:outline-off-red active:bg-red-500 text-white bottom-2 left-0"
              >
                Copy Email
              </button>
            </div>
          </div>
          <div className="relative flex-1 h-80 max-[350px]:h-70  max-[768px]:h-100 min-[350px]:max-sm:h-105 xs:h-110 md:h-95 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2 justify-items-center text-center mb-10">
            <div className="relative w-99/100 h-full   justify-items-center">
              <h2 className="text-2xl font-bold h-15">Copy Emails</h2>
              <Image
                src="/logos/mail.svg"
                alt="TEDxUNSW"
                width={100}
                height={500}
                className="max-[270px]:hidden"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText("tedxunsw@gmail.com");
                }}
                id="a"
                className="absolute w-full h-15 rounded-lg bg-red-500 focus:outline-2 focus:outline-off-red active:bg-red-500 text-white bottom-18 left-0"
              >
                tedxunswsponsorships@gmail.com
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("tedxunsw@gmail.com");
                }}
                id="a"
                className="absolute w-full h-15 rounded-lg bg-red-500 focus:outline-2 focus:outline-off-red active:bg-red-500 text-white bottom-34 left-0"
              >
                tedxunsw@gmail.com
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "tedxunswsponsorships@gmail.com",
                  );
                }}
                id="a"
                className="absolute w-full h-15 rounded-lg bg-red-500 focus:outline-2 focus:outline-off-red active:bg-red-500 text-white bottom-2 left-0"
              >
                tedxunswcurations@gmail.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
