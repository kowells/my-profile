import React, { useEffect, useState } from "react";

const navItems = ["Home", "About", "Skills", "Project", "Contact"];

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (item) => {
    setActiveSection(item.toLowerCase());
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/95 backdrop-blur-md border-b border-[#64ffda]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={() => handleNavClick("Home")}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={() => handleNavClick(item)}
                    className={`
                      relative rounded-md px-4 py-2 text-sm font-medium
                      transition-all duration-300
                      ${isActive
                        ? "text-[#64ffda]"
                        : "text-gray-300 hover:text-[#64ffda]"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item}

                    {/* Active underline */}
                    <span
                      className={`
                        absolute bottom-0 left-1/2 h-0.5
                        -translate-x-1/2
                        bg-[#64ffda]
                        transition-all duration-300
                        ${isActive
                          ? "w-6 opacity-100"
                          : "w-0 opacity-0"
                        }
                      `}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-[#64ffda] transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>

              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-[#0a192f] border-t border-[#64ffda]/10"
          id="mobile-menu"
        >
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  onClick={() => handleNavClick(item)}
                  className={`
                    block rounded-md px-3 py-3 text-base font-medium
                    transition-all duration-300
                    ${isActive
                      ? "bg-[#112240] text-[#64ffda] border-l-2 border-[#64ffda]"
                      : "text-gray-300 hover:bg-[#112240] hover:text-[#64ffda]"
                    }
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;