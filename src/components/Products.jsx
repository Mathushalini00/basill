import { useLanguage } from '../context/LanguageContext';

export default function Products() {
  const { t } = useLanguage();
  const products = t('products');

  return (
    <section id="prodotti" className="bg-black/[0.02] scroll-mt-20" aria-labelledby="products-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <h2
          id="products-title"
          className="text-3xl sm:text-4xl font-serif font-semibold text-center mb-16 tracking-tight"
        >
          {products.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.items.map((product, i) => (
            <article
              key={i}
              className="group bg-white rounded-lg overflow-hidden border border-black/5 hover:border-black/10 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-black/50 mb-6 text-sm">
                  {product.description}
                </p>
                <button
                  className="text-sm font-medium text-brand hover:text-brand-hover transition-colors duration-200 inline-flex items-center gap-2"
                  aria-label={`${products.btn} — ${product.name}`}
                >
                  {products.btn}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
