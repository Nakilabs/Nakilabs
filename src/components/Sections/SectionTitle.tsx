import { FC } from "react";

interface SectionTitleProps {
  title: string;
  description: string;
  label?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ description, title, label }) => {
  return (
    <div className="mb-4">
      <div className="space-y-2 md:space-y-4">
        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
          {title}
        </h2>
        <p className="text-gray-500 dark:text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
