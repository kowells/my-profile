import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="min-h-full">
        <nav className="bg-blue-900 fixed top-0 left-0 w-full z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {["Home", "About", "Skills", "Portfolio", "Contact"].map(
                      (item, index) => (
                        <a
                          key={index}
                          href={`#${item.toLowerCase()}`}
                          className={`rounded-md px-3 py-2 text-sm font-medium ${
                            item === "Home"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white"
                          }`}
                          aria-current={item === "Home" ? "page" : undefined}
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={`h-6 w-6 ${
                      isMobileMenuOpen ? "hidden" : "block"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className={`h-6 w-6 ${
                      isMobileMenuOpen ? "block" : "hidden"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          {isMobileMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {["Home", "About", "Skills", "Portfolio", "Contact"].map(
                  (item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                      aria-current={item === "Home" ? "page" : undefined}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
