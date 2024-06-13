import { FC } from "react";
import { Button } from "./ui/button";
import { FaChevronRight, FaDiagramProject } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const data = {
    label: "Realize Your Creative Ideas!",
    title: "Welcome to",
    brand: "Nakilabs",
    description:
      "Nakilabs specializes in transforming UI designs into high-quality code using HTML, React, and Next.js. We ensure clean code, responsive design, and an efficient process to guarantee smooth project execution.",
    cta: "Contact us",
    ctaProject: "See the Project",
  };
  return (
    <div>
      <div className="relative overflow-hidden py-10 min-h-screen before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
              href="#"
            >
              {data?.label}
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              {data?.title}
              <span className="bg-clip-text bg-gradient-to-tl ml-1 from-primary to-secondary text-transparent">
                {data.brand}
              </span>
            </h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-neutral-400">
              {data.description}
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <Button className="flex items-center gap-x-4">
              {data?.cta} <FaChevronRight />
            </Button>
            <Button className="flex items-center gap-x-4 " variant="outline">
              {data?.ctaProject} <FaDiagramProject />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
