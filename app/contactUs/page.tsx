export default function ContactUsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold p-3">Contact Us</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-170 md:w-300">
        <div className="flex-1 w-full h-60 md:h-55 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2">
          <h2 className="text-2xl font-bold h-18 md:h-20">
            Interested in Speaking at a Future Event?
          </h2>
          <p>
            If you are looking to speak at a future event, send an email to us
            <a
              href="mailto:tedxunswcurations@gmail.com"
              className="text-blue-500"
            >
              &nbsp;here&nbsp;
            </a>
            alongside your credentials so we keep in contact.
          </p>
        </div>
        <div className="flex-1 w-full h-60 md:h-55 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2 text-wrap">
          <h2 className="text-2xl font-bold h-18 md:h-20">
            Looking to Sponsor an Event?
          </h2>
          <p>
            Looking to sponsor a TEDxUNSW event? Please email us
            <a
              href="mailto:tedxunswsponsorships@gmail.com"
              className="text-blue-500"
            >
              &nbsp;here
            </a>
            ?
          </p>
        </div>
        <div className="flex-1 w-full h-60 md:h-55 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2">
          <h2 className="text-2xl font-bold h-18 md:h-20">
            Are you a Society Looking for Extra Reach?
          </h2>
          <p>
            If you are looking for an opportunity for promotion of your club or
            society then you should contact us
            <a
              href="mailto:tedxunswsponsorships@gmail.com"
              className="text-blue-500"
            >
              &nbsp;here
            </a>
            .
          </p>
        </div>
        <div className="flex-1 w-full h-60 md:h-55 bg-white text-black m-2 rounded-lg p-2 border-proper-red border-2">
          <h2 className="text-2xl font-bold h-18 md:h-20">
            Interested in Volunteering for Events?
          </h2>
          <p>
            Are you a performer, a photographer or do you have another skill
            useful for a TEDxUNSW event. Events can be very large productions so
            extra volunteers are always helpful to keep our events running
            smooth. Please contact us
            <a
              href="mailto:tedxunswcurations@gmail.com"
              className="text-blue-500"
            >
              &nbsp;here
            </a>
            .
          </p>
        </div>
        <div className="flex-1 w-full h-60 md:h-55 bg-white text-black m-2 mb-6 rounded-lg p-2 border-proper-red border-2">
          <h2 className="text-2xl font-bold h-18 md:h-20">
            Looking to Join the Society?
          </h2>
          <p>
            Applications are not currently open, please check back at the end of
            the year or if you have any questions about the application process
            email
            <a href="mailto:tedxunsw@gmail.com" className="text-blue-500">
              &nbsp;here
            </a>
            .
          </p>
        </div>
        <div className="flex-1 w-full h-60 md:h-55 bg-white text-black m-2 mb-8 md:mb-8 rounded-lg p-2 border-proper-red border-2">
          <h2 className="text-2xl font-bold h-18 md:h-20">Emails</h2>
          <ul className="list-disc list-inside">
            <li>
              <a href="mailto:tedxunsw@gmail.com" className="text-blue-500">
                tedxunsw@gmail.com
              </a>
            </li>
            <li>
              <a
                href="mailto:tedxunswsponsorships@gmail.com"
                className="text-blue-500"
              >
                tedxunswsponsorships@gmail.com
              </a>
            </li>
            <li>
              <a
                href="mailto:tedxunswcurations@gmail.com"
                className="text-blue-500"
              >
                tedxunswcurations@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
