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
        <div className="mx-auto max-w-screen-xl px-4 pt-5 pb-8 sm:px-6 lg:px-8 lg:pt-24 border-t border-gray-200">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-red-700 sm:text-5xl">
              Find Your Dream Job
            </h2>

            <p className="mx-auto mb-5 mt-4 max-w-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              maiores ipsum eos temporibus ea nihil.
            </p>
          </div>

          <div className=" border-t border-gray-200 pt-5 sm:flex sm:items-center sm:justify-between lg:mt-24">
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
