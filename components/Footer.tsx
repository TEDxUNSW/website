import Wave from "../public/wave.svg";
import Logo from "../public/logo-no-color.svg";

export default function Footer() {
  return (
    <footer className="text-white overflow-hidden relative h-220">
      <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-[105%]">
        <Wave className="w-full object-cover" />
        <div className="bg-[#e24843] h-[100%]" />
      </div>
      <div className="relative pt-64 w-[75%] mx-auto">
        <div className="w-[80%] mx-auto">
          <h1 className="text-center text-8xl font-bold">TEDxUNSW</h1>
          <div className="flex flex-row justify-center text-black">
            <p className="text-4xl font-bold">
              Sign up for email updates from TEDxUNSW
            </p>
            <div className="flex flex-row items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="ml-4 p-2 underline underline-offset-10 decoration-black placeholder:text-black text-2xl text-bold"
              />
              <button className="ml-4 p-2 bg-black text-white">Submit</button>
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
            <p className="text-2xl font-bold">2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
