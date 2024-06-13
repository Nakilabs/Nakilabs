import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-auto w-full bg-slate-950 max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div>
          <a
            className="flex-none text-xl font-semibold text-white dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Nakilabs
          </a>
        </div>

        <div className="mt-3">
          <p className="text-gray-500 dark:text-neutral-500">
            part of
            <a
              className="font-semibold ml-1 text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
              href="#"
            >
              codewithagus.
            </a>{" "}
          </p>
          <p className="text-gray-500 dark:text-neutral-500">
            © nakilabs. 2024. All rights reserved.
          </p>
        </div>

        <div className="mt-3 space-x-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
