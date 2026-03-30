import { useLanguage } from '../context/LanguageContext';

export default function ProdottiPage() {
  const { t } = useLanguage();
  const products = t('products');

  return (
    <>
      {/* Page Hero */}
      <section className="bg-black/[0.02] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              {products.kicker}
            </span>
            <div className="w-10 h-0.5 bg-brand mx-auto mb-8" aria-hidden="true" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight tracking-tight mb-8">
              {products.headline}
            </h1>
            <p className="text-lg lg:text-xl text-black/55 leading-relaxed">
              {products.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-16 lg:space-y-24">
            {products.items.map((product, i) => (
              <article
                key={i}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:[direction:ltr]">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-black/5 group relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 bg-brand text-white text-xs font-semibold px-3 py-1 rounded tracking-wide uppercase">
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:[direction:ltr]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-brand tracking-wider">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-8 h-0.5 bg-brand" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4 tracking-tight">
                    {product.name}
                  </h2>
                  <p className="text-base lg:text-lg text-black/55 leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 bg-brand text-white font-medium px-6 py-3 rounded hover:bg-brand-hover transition-colors duration-200 text-sm shadow-sm shadow-brand/25"
                    aria-label={`${products.btn} — ${product.name}`}
                  >
                    {products.btn}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
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
