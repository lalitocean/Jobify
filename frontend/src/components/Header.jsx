import {useState} from "react";
import {LogOut, Menu, User, X} from "lucide-react";
import {Link} from "react-router-dom";
import {Popover, PopoverTrigger, PopoverContent} from "@radix-ui/react-popover";
import {Avatar, AvatarImage} from "./ui/avatar";
import {Button} from "./ui/button";

const Header = () => {
  const NavLinks = [
    {name: "Home", path: "/"},
    {name: "Jobs", path: "/jobs"},
    {name: "Browse", path: "/browse"},
    {name: "Contact", path: "/contact"},
  ];

  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  const user = false;

  return (
    <>
      <header className="bg-whiten border-t border-gray-200  border-b">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to="/">
                <a className="block bg-transparent text-red-700 border-3 rounded-md px-4 py-1.5 font-bold">
                  <span>Jobify</span>
                </a>{" "}
              </Link>
            </div>
            <div className="hidden md:block">
              <nav>
                <ul className="flex items-center gap-6 text-md ">
                  {NavLinks.map((link) => {
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="text-gray-600 hover:text-red-700 transition-colors font-medium"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </ul>
              </nav>
            </div>
            {/* Desktop Nav */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                {!user ? (
                  <>
                    <Link to="/register">
                      <Button variant="outline">Register</Button>
                    </Link>
                    <Link to="/login">
                      <Button
                        className="bg-red-600 text-white
                        hover:bg-red-700
                        hover:text-white"
                        variant="outline"
                      >
                        Login
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                        </Avatar>
                      </PopoverTrigger>
                      <PopoverContent className="w-50 mt-10 shadow-2xs">
                        <div className="flex gap-2 space-y-2 ">
                          <Avatar>
                            <AvatarImage
                              src="https://github.com/shadcn.png"
                              alt="@shadcn"
                            />
                          </Avatar>
                          <h4 className=" font-sans text-foreground">
                            Hi, User
                          </h4>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex space-x-2c w-fit items-center ">
                            <User />
                            <Button className="border-none" variant="link">
                              view profile
                            </Button>
                          </div>
                          <div className="flex gap-1 space-x-2 w-fit items-center ">
                            <LogOut />
                            <Button variant="link">logout</Button>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </>
                )}
              </div>
              <div className="block md:hidden">
                <button
                  onClick={toggleNav}
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  {open ? <X /> : <Menu />}
                </button>
                {open && (
                  <div className="xl:hidden absolute bg-gray-100 w-[50vw] top-[65px] z-0 flex flex-col right-0 text-black text-center py-5 pb-5 gap-10 font-bold max-h-[90vh] ">
                    {NavLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="hover:underline hover:text-red-700"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
