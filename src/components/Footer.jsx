import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assests/Logo.jpeg";

export default function Footer() {
  const { t } = useLanguage();
  const footer = t("footer");
  const nav = t("nav");
  const contact = t("contact");

  const navLinks = [
    { label: nav.home, path: "/" },
    { label: nav.storia, path: "/storia" },
    { label: nav.prodotti, path: "/prodotti" },
    { label: nav.qualita, path: "/qualita" },
    { label: nav.contatti, path: "/contatti" },
  ];

  return (
    <footer className="bg-black text-white relative" role="contentinfo">
      {/* Top accent area */}
      <div className="h-2 bg-brand" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <img
              src={Logo}
              alt="La Casa del Basilico"
              className="h-16 w-auto mb-5 invert"
            />

            <p className="text-brand text-xs font-semibold uppercase tracking-[0.28em] mb-4">
              {footer.tagline}
            </p>

            <p className="text-sm leading-7 text-white/65 max-w-sm">
              {footer.note}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand mb-6">
              {footer.navTitle}
            </h3>

            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-200 hover:text-brand"
                >
                  <span className="h-px w-0 bg-brand transition-all duration-200 group-hover:w-4" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-brand mb-6">
              {footer.contactTitle}
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/65">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-brand" />
                <p className="leading-6">{contact.address}</p>
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 transition-colors duration-200 hover:text-brand"
              >
                <FiMail className="shrink-0 text-brand" />
                <span>{contact.email}</span>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 transition-colors duration-200 hover:text-brand"
              >
                <FiPhone className="shrink-0 text-brand" />
                <span>{contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <p className="text-xs text-white/35">{footer.rights}</p>

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/50 hover:text-brand transition-colors duration-200"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="text-white/50 hover:text-brand transition-colors duration-200"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/50 hover:text-brand transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>

            {/* Divider */}
            <span className="h-4 w-px bg-white/10" />

            {/* Tagline */}
            <span className="text-xs text-white/35">{footer.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
