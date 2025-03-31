import {Facebook, Github, Instagram, X} from "lucide-react";
import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  const FooterLinks = [
    {name: "Home", path: "/"},
    {name: "Jobs", path: "/jobs"},
    {name: "Browse", path: "/browse"},
    {name: "Contact", path: "/contact"},
  ];
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl pt-5 pb-5 sm:px-6 lg:px-5 lg:pt-5 border-t border-gray-200">
          <div className=" sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap justify-center gap-4 text-md lg:justify-center">
              {FooterLinks.map((link) => {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-600 font-semibold text-md transition hover:text-red-700"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>

            <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook size={20} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram size={20} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <X size={20} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <Github size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
