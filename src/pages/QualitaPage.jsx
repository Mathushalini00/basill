import { useLanguage } from '../context/LanguageContext';

const checkIcon = (
  <svg className="w-6 h-6 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function QualitaPage() {
  const { t } = useLanguage();
  const quality = t('quality');

  return (
    <>
      {/* Page Hero */}
      <section className="bg-black/[0.02] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              {quality.kicker}
            </span>
            <div className="w-10 h-0.5 bg-brand mx-auto mb-8" aria-hidden="true" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight tracking-tight mb-8">
              {quality.headline}
            </h1>
            <p className="text-lg lg:text-xl text-black/55 leading-relaxed">
              {quality.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Quality Points */}
      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {quality.points.map((point, i) => (
              <div
                key={i}
                className="p-8 rounded-lg border border-black/5 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
                    {checkIcon}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-brand tracking-widest uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-serif font-semibold mb-3 tracking-tight">
                  {point.title}
                </h2>
                <p className="text-sm text-black/50 leading-relaxed">
                  {point.text}
                </p>
              </div>
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
