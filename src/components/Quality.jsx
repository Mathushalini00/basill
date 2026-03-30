import { useLanguage } from '../context/LanguageContext';

const checkIcon = (
  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Quality() {
  const { t } = useLanguage();
  const quality = t('quality');

  return (
    <section id="qualita" className="scroll-mt-20" aria-labelledby="quality-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <h2
            id="quality-title"
            className="text-3xl sm:text-4xl font-serif font-semibold text-center mb-16 tracking-tight"
          >
            {quality.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {quality.points.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-lg border border-black/5 hover:border-brand/20 transition-colors duration-300"
              >
                {checkIcon}
                <span className="text-base font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
