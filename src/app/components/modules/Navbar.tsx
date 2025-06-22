import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex justify-between p-5">
      <div>
        <Image src={"/logo.png"} width={139} height={40} alt="logo" />
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
