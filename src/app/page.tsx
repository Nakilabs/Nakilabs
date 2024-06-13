import Hero from "@/components/Hero";
import FeatureServices from "@/components/features/FeatureServices";
import FeatureWhyUs from "@/components/features/FeatureWhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-white">
        <div className="py-10">
          <FeatureWhyUs />
        </div>
        <div className="py-10">
          <FeatureServices />
        </div>
      </div>
    </div>
  );
}
