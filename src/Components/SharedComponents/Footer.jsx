import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import BrandLogo from "./BrandLogo";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";

const Footer = () => {
  const { name } = useContext(AuthContext);
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Privacy",
        },
        {
          href: "javascript:void()",
          name: "About US",
        },
      ],
    },
  ];

  return (
    <footer className="shadow py-10 shadow-blue-600">
      <div className="container mx-auto px-4">
        <BrandLogo />
        <p className="leading-relaxed mt-2 text-[15px]">
          Your World of Knowledge, at Your Fingertips
        </p>
      </div>
      <div className="mt-8 items-center justify-between sm:flex px-4 container mx-auto">
        <div className="mt-4 sm:mt-0">
          &copy; 2025 LearnOsphere developed with ❤️ by {name} || All rights
          reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/odd.otaku/"
              target="_blank"
              className="w-10 h-10 border border-blue-100 hover:border-blue-600 text-blue-600 rounded-full flex items-center justify-center"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.instagram.com/odd.sr/"
              target="_blank"
              className="w-10 h-10 border border-purple-100 hover:border-purple-600 text-purple-600 rounded-full flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/shaharearrahmansabbir/"
              target="_blank"
              className="w-10 h-10 border border-blue-100 hover:border-blue-600 text-blue-600 rounded-full flex items-center justify-center"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/ShaharearSabbir"
              target="_blank"
              className="w-10 h-10 border border-gray-100 hover:border-gray-600 text-gray-600 rounded-full flex items-center justify-center"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
