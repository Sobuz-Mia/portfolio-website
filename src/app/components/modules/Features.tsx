import React from "react";
import { Zap } from "lucide-react";
import { FeatureCard } from "../ui/FeatureCard";
type Feature = {
  icon: "Code" | "Palette" | "Smartphone" | "Zap" | "Users" | "Award";
  title: string;
  description: string;
  gradient: string;
};
const features: Feature[] = [
  {
    icon: "Code",
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using React, Vue, Angular, and modern JavaScript frameworks.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive designs that provide exceptional user experiences and drive engagement.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: "Smartphone",
    title: "Mobile-First Design",
    description:
      "Developing responsive applications that work seamlessly across all devices with optimal performance.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, SEO, and performance to deliver lightning-fast user experiences.",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: "Users",
    title: "Full-Stack Development",
    description:
      "End-to-end development using Node.js, Python, databases, and cloud services for complete solutions.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: "Award",
    title: "Quality Assurance",
    description:
      "Delivering high-quality code with thorough testing, code reviews, and best practices implementation.",
    gradient: "from-red-500 to-pink-600",
  },
];

export const Features = () => {
  return (
    <section className="py-[100px]">
      <div className="">
        <div>
          <h2 className="text-[#f9004d] leading-[1] text-[14px] font-medium font-mons mb-[15px]">
            FEATURES
          </h2>
          <h3 className="text-[#c4cfde] leading-[1.2] text-[60px] font-bold mb-[50px]">
            What I Do
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-8">
            Ready to start your next project?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>{`Let's Work Together`}</span>
            <Zap className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
