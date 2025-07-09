import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { Code, Palette, Zap } from "lucide-react";
import Image from "next/image";
import GeneratesRole from "../ui/GeneratesRole";
const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center gap-10 mt-20 border-b pb-[120px] border-[#121415]">
      <div className="max-w-[50%] w-full">
        <h3 className="text-[#c4cfde] text-[14px] font-[500] tracking-[3px] font-mons uppercase mb-5">
          Welcome to my world
        </h3>
        <h1 className="font-bold font-mons text-white text-[60px] leading-[1.1]">
          Hi, I’m <span className="primary-color"> Sobuz Mia</span> <br />
          a <GeneratesRole />
        </h1>
        <p className="text-[#c4cfde] text-[16px] opacity-[.9] mt-[30px]">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
        <div className="pt-[125px] flex justify-between items-center">
          <div>
            <h4 className="uppercase text-[#c4cfde] tracking-[2px] text-[14px] mb-5">
              Find With Me
            </h4>
            <div className="flex gap-5 ">
              <div className="shadow1 w-[60px] h-[60px] rounded-[6px] flex justify-center items-center ease-in-out hover:bg-[#212428] hover:translate-y-[-3px] transition-all duration-300 hover:scale-100">
                <FiFacebook className="text-[#c4cfde]" />
              </div>
              <div className="shadow1 w-[60px] h-[60px] rounded-[6px] flex justify-center items-center ease-in-out hover:bg-[#212428] hover:translate-y-[-3px] transition-all duration-300 hover:scale-100">
                <SlSocialTwitter className="text-[#c4cfde]" />
              </div>
              <div className="shadow1 w-[60px] h-[60px] rounded-[6px] flex justify-center items-center ease-in-out hover:bg-[#212428] hover:translate-y-[-3px] transition-all duration-300 hover:scale-100">
                <SlSocialLinkedin className="text-[#c4cfde]" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="uppercase text-[#c4cfde] tracking-[2px] text-[14px] mb-5">
              Best Skill On
            </h4>
            <div className="flex gap-5">
              <div className="shadow1 h-[60px] rounded-[6px] flex justify-center items-center transition-all duration-300 ease-in-out ">
                <span className="text-[#c4cfde] font-medium px-2">
                  React js
                </span>
              </div>
              <div className="shadow1 h-[60px] rounded-[6px] flex justify-center items-center transition-all duration-300 ease-in-out ">
                <span className="text-[#c4cfde] font-medium px-2">Next js</span>
              </div>
              <div className="shadow1 h-[60px] rounded-[6px] flex justify-center items-center transition-all duration-300 ease-in-out ">
                <span className="text-[#c4cfde] font-medium px-2">Node js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-fade-in">
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Background gradient circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full"></div>

            {/* Image container with border */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow1 border-4 border-background">
              <Image
                src="/Professional_picture-removebg.png"
                alt="Professional Portrait"
                className="w-full h-full object-cover object-center"
                width={400}
                height={400}
              />

              {/* Overlay gradient for better text readability on floating elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>

            {/* Floating skill icons */}
            <div
              className="absolute -top-4 -right-4 bg-card rounded-2xl p-3 shadow1 animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            >
              <Code className="w-6 h-6 text-[#c4cfde]" />
            </div>

            <div
              className="absolute top-16 -left-6 bg-card rounded-2xl p-3 shadow1 animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "3s" }}
            >
              <Palette className="w-6 h-6 text-[#c4cfde]" />
            </div>

            <div
              className="absolute -bottom-4 left-8 bg-card rounded-2xl p-3 shadow1 animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "3s" }}
            >
              <Zap className="w-6 h-6 text-[#c4cfde]" />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-4 -right-8 bg-primary text-[#c4cfde] rounded-2xl px-4 py-2 shadow1">
              <div className="text-center">
                <div className="text-lg font-bold">2+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
