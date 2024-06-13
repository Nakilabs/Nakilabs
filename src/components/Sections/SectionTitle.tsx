import { FC } from "react";
import { BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

interface SectionTitleProps {
  title: string;
  description: string;
  label?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ description, title, label }) => {
  return (
    <div className="mb-4">
      <div className="space-y-2 md:space-y-4">
        {label && (
          <span className="inline-flex items-center gap-x-2 bg-blue-50 text-blue-600  border border-gray-200 text-sm  p-1 px-2 font-medium rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200">
            {label} <BsStarFill className="text-amber-300 text-sm" />
          </span>
        )}
        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
          {title}
        </h2>
        <p className="mt-2 text-gray-500 dark:text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
