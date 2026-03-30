import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaAt,
  FaGlobeEurope,
  FaInstagram,
  FaRegCopy,
} from "react-icons/fa";

function InfoItem({ icon, title, lines }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f26419] text-white">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-[#3e3833] mb-2">{title}</h3>
      <div className="text-sm text-[#6e665e]">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks for reaching out! We will get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-[#4b433c]">
      {" "}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="font-serif text-[42px] leading-[1.02] tracking-tight text-[#2f2925] md:text-[64px]">
            Inquire with the{" "}
            <span className="italic font-normal text-[#f26419]">Estate</span>
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#8d847a]">
            Whether seeking logistics for global export or a private tasting at
            our Tuscan orchard, our concierge team is at your disposal.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Form */}
          <div className="rounded-xl bg-gray-100 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)] md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7f756b]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Giacomo Rossi"
                    className="h-12 w-full rounded-md border border-transparent bg-gray-50 px-4 text-sm text-[#514943] placeholder:text-[#b1a8a0] focus:outline-none focus:ring-2 focus:ring-[#f26419]/30"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7f756b]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="rossi@estate.it"
                    className="h-12 w-full rounded-md border border-transparent bg-gray-50 px-4 text-sm text-[#514943] placeholder:text-[#b1a8a0] focus:outline-none focus:ring-2 focus:ring-[#f26419]/30"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7f756b]">
                  Nature of Inquiry
                </label>
                <select className="h-12 w-full rounded-md border border-transparent bg-gray-50 px-4 text-sm text-[#514943] focus:outline-none focus:ring-2 focus:ring-[#f26419]/30">
                  <option>International Export House</option>
                  <option>Private Tasting</option>
                  <option>Product Inquiry</option>
                  <option>Wholesale Partnership</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7f756b]">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  placeholder="How may we assist your journey?"
                  className="w-full rounded-md border border-transparent bg-gray-50 px-4 py-4 text-sm text-[#514943] placeholder:text-[#b1a8a0] focus:outline-none focus:ring-2 focus:ring-[#f26419]/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#f26419] px-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_18px_rgba(242,100,25,0.28)] transition hover:-translate-y-[1px] hover:bg-[#e55b14]"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Right panel */}
          <div className="flex flex-col">
            <div className="space-y-8">
              <InfoItem
                icon={<FaMapMarkerAlt className="text-sm" />}
                title="The Italian Office"
                lines={[
                  "Via dell'Aranceto, 42",
                  "53045 Montepulciano (SI)",
                  "Tuscany, Italy",
                ]}
              />

              <InfoItem
                icon={<FaPhoneAlt className="text-sm" />}
                title="Direct Line"
                lines={["+39 0578 757000"]}
              />

              <InfoItem
                icon={<FaAt className="text-sm" />}
                title="Digital Correspondence"
                lines={["concierge@sundrenchedestate.it"]}
              />
            </div>

            {/* Map card */}
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Montepulciano,SI,Italy&output=embed"
                className="w-full h-[260px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Overlay label (optional, keeps your design style) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-lg px-5 py-4 shadow-md">
                <div className="flex items-center gap-2 text-[#f26419] mb-1">
                  <FaMapMarkerAlt />
                  <span className="text-sm font-medium text-black">
                    Montepulciano, SI
                  </span>
                </div>
                <a
                  href="https://maps.google.com?q=Montepulciano,SI,Italy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.12em] text-black/60 hover:text-brand transition"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="mt-8 h-px bg-gray-50" />

            {/* Socials */}
            <div className="mt-6 flex items-center gap-5 text-[#f26419]">
              <a
                href="#"
                className="transition hover:opacity-70"
                aria-label="Website"
              >
                <FaGlobeEurope className="text-sm" />
              </a>
              <a
                href="#"
                className="transition hover:opacity-70"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="transition hover:opacity-70"
                aria-label="Copy"
              >
                <FaRegCopy className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Editorial image */}
        <div className="mt-16 overflow-hidden rounded-xl">
          <div
            className="relative h-[320px] w-full bg-cover bg-center md:h-[420px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-8 left-8 max-w-xl text-white md:bottom-10 md:left-10">
              <p className="font-serif text-3xl italic leading-snug md:text-4xl">
                "The soul of the fruit is preserved in the silence of the
                orchard."
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/75">
                Heritage Notes, 1924
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
