import { useLanguage } from '../context/LanguageContext';

export default function Story() {
  const { t } = useLanguage();
  const story = t('story');

  return (
    <section id="storia" className="scroll-mt-20" aria-labelledby="story-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-px bg-brand mx-auto mb-10" aria-hidden="true" />
          <h2
            id="story-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-tight tracking-tight mb-8"
          >
            {story.title}
          </h2>
          <p className="text-lg lg:text-xl text-black/60 leading-relaxed">
            {story.text}
          </p>
          <div className="w-12 h-px bg-black/10 mx-auto mt-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
