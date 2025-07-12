"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`flex justify-between p-4 items-center sticky top-0 z-50 px-[260px] ${
        isScrolled ? "shadow1 bg-[#212428]" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/Professional_picture-removebg.png"
          alt="Professional Portrait"
          className="w-full h-full object-scale-down rounded-full border-4 border-[#2C2F35]"
          width={60}
          height={60}
        />
        <span className="text-[#c4cfde] font-bold text-[17px]">SOBUZ</span>
      </div>
      <div>
        <nav className="flex justify-center space-x-10 uppercase text-[13px]  font-semibold tracking-wide text-[#c4cfde]">
          <a href="#home" className="hover:text-[#ff014f]">
            Home
          </a>
          <a href="#features" className="hover:text-[#ff014f]">
            Features
          </a>
          <a href="#portfolio" className="hover:text-[#ff014f]">
            Portfolio
          </a>
          <a href="#resume" className="hover:text-[#ff014f]">
            Resume
          </a>
          <a href="#testimonial" className="hover:text-[#ff014f]">
            Testimonial
          </a>
          <a href="#clients" className="hover:text-[#ff014f]">
            Clients
          </a>
          <a href="#pricing" className="hover:text-[#ff014f]">
            Pricing
          </a>
          <a href="#blog" className="hover:text-[#ff014f]">
            Blog
          </a>
          <a href="#contacts" className="hover:text-[#ff014f]">
            Contacts
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
