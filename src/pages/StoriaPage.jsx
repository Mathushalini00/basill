import { useLanguage } from "../context/LanguageContext";
import CEO1 from "../assets/ceo1.jpg";
import CEO2 from "../assets/ceo2.jpg";
export default function StoriaPage() {
  const { t } = useLanguage();
  const story = t("story");

  return (
    <>
      {/* Page Hero */}
      <section className="bg-black/[0.02] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              {story.kicker}
            </span>
            <div
              className="w-10 h-0.5 bg-brand mx-auto mb-8"
              aria-hidden="true"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight tracking-tight mb-8">
              {story.headline}
            </h1>
            <p className="text-lg lg:text-xl text-black/55 leading-relaxed">
              {story.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="aspect-[21/9] overflow-hidden rounded-lg border border-black/5">
            <img
              src="/hero.jpg"
              alt="Family greenhouses"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="space-y-20">
            {story.sections.map((section, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16"
              >
                <div>
                  <span className="text-sm font-semibold text-brand tracking-wider uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-8 h-0.5 bg-brand mt-3" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-6 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-base lg:text-lg text-black/55 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-[#fffaf7]">
        <h2 className="text-4xl font-bold mb-4">Meet Our Founders</h2>
        <p className="text-gray-500 mb-16">
          The passion and partnership behind Basill
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12 mb-16">
          {/* Founder 1 */}
          <div className="group cursor-pointer">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-md transition duration-500 group-hover:shadow-2xl">
              <img
                src={CEO1}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold transition duration-300 group-hover:text-[#ff5400]">
              Chiara Ratto
            </h3>

            <div className="w-0 h-[2px] bg-[#ff5400] mx-auto mt-3 group-hover:w-16 transition-all duration-500"></div>
          </div>

          {/* Founder 2 */}
          <div className="group cursor-pointer">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-md transition duration-500 group-hover:shadow-2xl">
              <img
                src={CEO2}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold transition duration-300 group-hover:text-[#ff5400]">
              Kobi Vasanthakumar
            </h3>

            <div className="w-0 h-[2px] bg-[#ff5400] mx-auto mt-3 group-hover:w-16 transition-all duration-500"></div>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            la casa del basilico was founded by two passionate individuals who
            shared a vision of bringing authenticity and quality together. Their
            journey began with a simple idea and grew into a meaningful
            partnership focused on creating something truly valuable.
          </p>

          <p className="mt-6 text-[#ff5400] italic font-medium">
            “We didn’t just build a brand — we built a story we believe in.”
          </p>
        </div>
      </section>

      {/* Bottom Accent */}
      <section className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-brand/30" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand">
              La Casa del Basilico
            </span>
            <div className="w-12 h-0.5 bg-brand/30" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}
