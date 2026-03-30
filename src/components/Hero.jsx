import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const hero = t('hero');

  return (
    <section className="pt-20" aria-labelledby="hero-headline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-brand mb-6">
              {hero.kicker}
            </span>
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight tracking-tight text-black mb-6"
            >
              {hero.headline}
            </h1>
            <p className="text-lg text-black/60 leading-relaxed max-w-xl mb-10">
              {hero.text}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#prodotti"
                className="bg-brand text-white font-medium px-7 py-3.5 rounded hover:bg-brand-hover transition-colors duration-200 text-sm"
              >
                {hero.btnPrimary}
              </a>
              <a
                href="#storia"
                className="border border-black/20 text-black font-medium px-7 py-3.5 rounded hover:border-black/40 transition-colors duration-200 text-sm"
              >
                {hero.btnSecondary}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/hero.jpg"
                alt="Serre di basilico della famiglia — basil greenhouses"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
