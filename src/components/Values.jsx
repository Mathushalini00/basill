import { useLanguage } from '../context/LanguageContext';

const icons = {
  greenhouse: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M4 40h40M8 40V22l16-14 16 14v18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 40V30h12v10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 8v14M14 18h20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  craft: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M24 4c-6 8-16 14-16 26a16 16 0 0 0 32 0C40 18 30 12 24 4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 36v-12M18 30l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  detail: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 4v8M24 36v8M4 24h8M36 24h8" strokeLinecap="round" />
    </svg>
  ),
  presence: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="6" y="10" width="36" height="28" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 18h36" strokeLinecap="round" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      <circle cx="18" cy="14" r="1.5" fill="currentColor" />
    </svg>
  ),
};

export default function Values() {
  const { t } = useLanguage();
  const values = t('values');

  return (
    <section className="bg-black/[0.02]" aria-labelledby="values-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <h2
          id="values-title"
          className="text-3xl sm:text-4xl font-serif font-semibold text-center mb-16 tracking-tight"
        >
          {values.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.items.map((item, i) => (
            <div
              key={i}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-black/10 text-black/70 mb-5 group-hover:border-brand/30 group-hover:text-brand transition-all duration-300">
                {icons[item.icon]}
              </div>
              <h3 className="text-base font-medium tracking-wide">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
