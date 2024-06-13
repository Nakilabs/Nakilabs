import { FC } from "react";
import { FaCut, FaCode, FaDesktop } from "react-icons/fa";
import SectionTitle from "../Sections/SectionTitle";
import {
  FaCodeBranch,
  FaDev,
  FaPage4,
  FaPagelines,
  FaWebAwesome,
  FaWhatsapp,
} from "react-icons/fa6";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface FeatureServicesProps {}

const FeatureServices: FC<FeatureServicesProps> = ({}) => {
  const data = {
    title: "Transforming UI Designs & Integrating Data",
    description:
      "At Nakilabs, we excel in slicing UI designs and seamlessly integrating data for frontend development. With our expertise, we create responsive web solutions that elevate user experiences.",
  };

  const services = [
    {
      id: 1,
      icon: (
        <div className="bg-slate-100 p-4 rounded-sm text-blue-600">
          <FaCode size={56} />
        </div>
      ),
      bgColor: "bg-blue-600",

      title: "Slicing Design",
      subtitle: "Convert UI Design to HTML, React.js, or Next.js",
      description:
        "Transform your static designs into pixel-perfect, responsive HTML, React.js, or Next.js components.",
    },
    {
      id: 2,
      icon: (
        <div className="bg-slate-100 p-4 rounded-sm text-rose-600">
          <FaCodeBranch size={56} />
        </div>
      ),
      bgColor: "bg-rose-500",
      title: "Integration",
      subtitle: "API Integration with Next.js",
      description:
        "Seamlessly integrate APIs with Next.js to create dynamic and data-driven web applications.",
    },
    {
      id: 3,
      icon: (
        <div className="bg-slate-100 p-4 rounded-sm text-amber-600">
          <FaWebAwesome size={56} />
        </div>
      ),
      bgColor: "bg-amber-600",
      title: "Full Landing Page Design & Development",
      subtitle: "Complete Landing Page Solutions",
      description:
        "Get a fully designed and developed landing page tailored to your needs, ensuring a great user experience.",
    },
  ];

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <SectionTitle title={data.title} description={data.description} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              <div
                className={`h-52 relative flex flex-col justify-center items-center ${service.bgColor} rounded-t-xl`}
              >
                {service.icon}
              </div>
              <div className="flex flex-col justify-between p-4 md:p-6 h-64">
                <div>
                  <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                    {service.title}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    {service.subtitle}
                  </h3>
                  <p className="mt- text-gray-500 dark:text-neutral-500 line-clamp-3">
                    {service.description}
                  </p>
                </div>{" "}
                <Button className={cn("text-white w-fit ", service?.bgColor)}>
                  Order now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureServices;
