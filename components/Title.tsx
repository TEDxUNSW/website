import clsx from 'clsx';
import { ArrowRight } from "lucide-react";
import { Url } from 'next/dist/shared/lib/router/router';
import Link from "next/link";

// This component takes 4 props:
// TitleLg: Main Title
// TitleSm: Subtitle (optional, linked to another route to provide more information )
// color: Color of the large title ("Black" or "White", "White" by default)
// link: Link to be displayed if titleSm is provided (optional)

interface TitleProps {
  titleLg: string;
  titleSm?: string;
  color?: string;
  route?: Url;
}

export default function Title( {titleLg,titleSm,color,route}:TitleProps){
    const color_final = color?.toLowerCase() || "white";
    return (
      <div className=" p-2 flex flex-col justify-center items-start">
        <h1
          className={clsx("text-3xl flex font-black", {
            "text-black": color_final === "black",
            "text-white": color_final === "white",
          })}
        >
          {titleLg}
        </h1>
        <div className="flex pl-[0.1rem] items-center justify-center">
          <h5 className="text-[var(--color-red)] text-sm">
            {route ? (
              <Link className="group" href={route}>
                {titleSm}
                <div className="relative left-0 bottom-0 h-[2px] w-full bg-[var(--color-red)] transform scale-x-0 transition-transform duration-300 ease-out origin-center group-hover:scale-x-100" />
              </Link>
            ) : (
              titleSm
            )}
          </h5>
          <span className="text-[var(--color-red)] text-sm">
            <ArrowRight width={14} />
          </span>
        </div>
      </div>
    );
}