const faqs = [
  {
    question: 'How does DreamCanvas generate images?',
    answer:
      'We tap into Pollinations AI to synthesize artwork based on your prompt. Each render is generated on demand, so even identical prompts can produce unique results.'
  },
  {
    question: 'Why do I sometimes get a different style than expected?',
    answer:
      'AI generation embraces creative randomness. Try guiding the style with descriptive adjectives (e.g. “watercolor”, “digital painting”, “cinematic lighting”).'
  },
  {
    question: 'Can I use the images commercially?',
    answer:
      'Pollinations images are royalty-free, but double-check the latest licensing terms if you plan to use imagery in commercial projects.'
  },
  {
    question: 'How do I get sharper outputs?',
    answer:
      'Use detailed prompts that specify mood, composition, lighting, and camera angle. Turning the generated image into a new prompt often improves fidelity.'
  }
];

export function FaqSection() {
  return (
    <section className="faq">
      <h2>FAQ</h2>
      <div className="faq__grid">
        {faqs.map((faq) => (
          <article key={faq.question} className="faq__card">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
