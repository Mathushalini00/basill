import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  greenhouse: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M4 40h40M8 40V22l16-14 16 14v18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 40V30h12v10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M24 8v14M14 18h20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  craft: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <path
        d="M24 4c-6 8-16 14-16 26a16 16 0 0 0 32 0C40 18 30 12 24 4z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 36v-12M18 30l6-6 6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  detail: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v8M24 36v8M4 24h8M36 24h8" strokeLinecap="round" />
    </svg>
  ),
  presence: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-7 h-7"
    >
      <rect
        x="6"
        y="10"
        width="36"
        height="28"
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 18h36" strokeLinecap="round" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      <circle cx="18" cy="14" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export default function HomePage() {
  const { t } = useLanguage();
  const hero = t("hero");
  const values = t("values");
  const homeStory = t("homeStory");
  const homeProducts = t("homeProducts");
  const products = t("products");
  const homeQuality = t("homeQuality");

  return (
    <>
      {/* Hero */}

      <section aria-labelledby="hero-headline">
        <div
          className="relative w-full min-h-[70vh] flex items-center"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay (important for readability) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="max-w-2xl text-white">
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand mb-6">
                {hero.kicker}
              </span>

              <h1
                id="hero-headline"
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight tracking-tight mb-6"
              >
                {hero.headline}
              </h1>

              <p className="text-lg text-white/80 leading-relaxed mb-10">
                {hero.text}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/prodotti"
                  className="bg-brand text-white font-medium px-7 py-3.5 rounded hover:bg-brand-hover transition text-sm shadow-sm shadow-brand/30"
                >
                  {hero.btnPrimary}
                </Link>

                <Link
                  to="/storia"
                  className="border-2 border-white/70 text-white font-medium px-7 py-3.5 rounded hover:bg-white hover:text-black transition text-sm"
                >
                  {hero.btnSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-black/[0.02] border-y border-black/5"
        aria-labelledby="values-title"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <h2
            id="values-title"
            className="text-3xl sm:text-4xl font-serif font-semibold text-center mb-16 tracking-tight"
          >
            {values.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {values.items.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-brand/20 text-brand mb-5 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {icons[item.icon]}
                </div>
                <h3 className="text-sm font-semibold tracking-wide uppercase">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section aria-labelledby="home-story-title">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              {homeStory.kicker}
            </span>
            <div
              className="w-10 h-0.5 bg-brand mx-auto mb-8"
              aria-hidden="true"
            />
            <h2
              id="home-story-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-tight tracking-tight mb-8"
            >
              {homeStory.title}
            </h2>
            <p className="text-lg text-black/55 leading-relaxed mb-10">
              {homeStory.text}
            </p>
            <Link
              to="/storia"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover transition-colors duration-200 border-b-2 border-brand/30 hover:border-brand pb-1"
            >
              {homeStory.btn}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section
        className="bg-black/[0.02] border-y border-black/5"
        aria-labelledby="home-products-title"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              {homeProducts.kicker}
            </span>
            <h2
              id="home-products-title"
              className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight"
            >
              {homeProducts.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.items.map((product, i) => (
              <article
                key={i}
                className="group bg-white rounded-lg overflow-hidden border border-black/5 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-brand text-white text-xs font-semibold px-3 py-1 rounded tracking-wide uppercase">
                    {product.badge}
                  </span>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-black/45 mb-5 text-sm leading-relaxed">
                    {product.shortDesc}
                  </p>
                  <span className="text-sm font-semibold text-brand inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                    {products.btn}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/prodotti"
              className="inline-block bg-brand text-white font-medium px-8 py-3.5 rounded hover:bg-brand-hover transition-colors duration-200 text-sm shadow-sm shadow-brand/25"
            >
              {homeProducts.btn}
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Preview */}
      <section aria-labelledby="home-quality-title">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              {homeQuality.kicker}
            </span>
            <h2
              id="home-quality-title"
              className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight mb-6"
            >
              {homeQuality.title}
            </h2>
            <p className="text-lg text-black/55 leading-relaxed mb-10">
              {homeQuality.text}
            </p>
            <Link
              to="/qualita"
              className="inline-block border-2 border-brand text-brand font-medium px-8 py-3.5 rounded hover:bg-brand hover:text-white transition-colors duration-200 text-sm"
            >
              {homeQuality.btn}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
