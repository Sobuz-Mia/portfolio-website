"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Code, Palette, Smartphone, Zap, Users, Award } from "lucide-react";
// ...existing code...

const iconMap = {
  Code,
  Palette,
  Smartphone,
  Zap,
  Users,
  Award,
};

interface FeatureCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[Icon] || Code;
  return (
    <div
      className="group relative cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Card */}
      <div className="relative rounded-2xl p-8 shadow1 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2  overflow-hidden min-h-[280px] flex flex-col">
        {/* Icon Container */}
        <div className="relative mb-6 transition-transform duration-300 group-hover:-translate-y-1">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-2xl">
              <IconComponent className="h-8 w-8 text-[#c4cfde]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1 transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-[#c4cfde] mb-4 transition-all duration-300">
            {title}
          </h3>
          <p className="text-[#c4cfde] leading-relaxed text-base">
            {description}
          </p>
        </div>

        {/* Arrow - Hidden by default, visible on hover */}
        <div
          className={`relative mt-6 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${gradient} hover:scale-110 transition-transform duration-200`}
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Subtle gradient overlay on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />
      </div>
    </div>
  );
};
