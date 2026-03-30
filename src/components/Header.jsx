import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Logo from "../assests/Logo.jpeg";

const navLinks = [
  { key: "home", path: "/" },
  { key: "storia", path: "/storia" },
  { key: "prodotti", path: "/prodotti" },
  { key: "qualita", path: "/qualita" },
  { key: "contatti", path: "/contatti" },
];

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const nav = t("nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-md border-b border-brand/10"
          : "border-b border-black/5"
      }`}
      role="banner"
    >
      <div className="bg-brand w-full h-10 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center gap-6 text-white text-sm">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <FiPhone className="text-white" />
            <span>+39 000 000 0000</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FiMail className="text-white" />
            <span>info@lacasadelbasilico.it</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <FiMapPin className="text-white" />
            <span>Via delle Serre, Liguria</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
            aria-label="La Casa del Basilico — Home"
            onClick={handleNavClick}
          >
            <img
              src={Logo}
              alt="La Casa del Basilico"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.key}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide px-4 py-2 rounded transition-colors duration-200 ${
                    isActive
                      ? "text-brand bg-brand/5"
                      : "text-black/60 hover:text-brand hover:bg-brand/5"
                  }`
                }
              >
                {nav[link.key]}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="relative text-sm font-semibold tracking-wider px-3 py-1.5 rounded border border-brand/20 hover:border-brand/40 transition-colors duration-200"
              aria-label={`Switch to ${lang === "it" ? "English" : "Italian"}`}
            >
              <span className={lang === "it" ? "text-brand" : "text-black/30"}>
                IT
              </span>
              <span className="mx-1 text-black/15">|</span>
              <span className={lang === "en" ? "text-brand" : "text-black/30"}>
                EN
              </span>
            </button>

            {/* CTA */}
            <Link
              to="/prodotti"
              className="bg-brand text-white text-sm font-medium px-6 py-2.5 rounded hover:bg-brand-hover transition-colors duration-200 shadow-sm shadow-brand/20"
            >
              {nav.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          menuOpen
            ? "max-h-[500px] opacity-100 border-t border-brand/10"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="px-6 py-6 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              end={link.path === "/"}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `text-base font-medium px-4 py-3 rounded transition-colors duration-200 ${
                  isActive
                    ? "text-brand bg-brand/5 border-l-2 border-brand"
                    : "text-black/70 hover:text-brand hover:bg-brand/5"
                }`
              }
            >
              {nav[link.key]}
            </NavLink>
          ))}
          <div className="pt-4 mt-2 border-t border-brand/10 flex items-center justify-between">
            <button
              onClick={toggleLang}
              className="text-sm font-semibold tracking-wider px-3 py-1.5 rounded border border-brand/20"
              aria-label={`Switch to ${lang === "it" ? "English" : "Italian"}`}
            >
              <span className={lang === "it" ? "text-brand" : "text-black/30"}>
                IT
              </span>
              <span className="mx-1 text-black/15">|</span>
              <span className={lang === "en" ? "text-brand" : "text-black/30"}>
                EN
              </span>
            </button>
            <Link
              to="/prodotti"
              onClick={handleNavClick}
              className="bg-brand text-white text-sm font-medium px-6 py-2.5 rounded hover:bg-brand-hover transition-colors duration-200 shadow-sm shadow-brand/20"
            >
              {nav.cta}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
