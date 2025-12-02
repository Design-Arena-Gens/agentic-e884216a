const ideas = [
  'glowing bioluminescent forest with floating fireflies, cinematic lighting',
  'architectural illustration of a floating city above the clouds, art deco style',
  'surreal portrait of a cosmic queen with nebula hair, digital painting',
  'retro-futuristic motorcycle racing through neon rain, motion blur'
];

interface PromptIdeasProps {
  onSelect: (prompt: string) => void;
}

export function PromptIdeas({ onSelect }: PromptIdeasProps) {
  return (
    <section className="prompt-ideas">
      <h2>Need inspiration?</h2>
      <div className="prompt-ideas__chips">
        {ideas.map((idea) => (
          <button
            type="button"
            key={idea}
            className="prompt-ideas__chip"
            onClick={() => onSelect(idea)}
          >
            {idea}
          </button>
        ))}
      </div>
    </section>
  );
}
