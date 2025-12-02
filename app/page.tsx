'use client';

import { useCallback, useState } from 'react';
import { PromptForm } from '../components/PromptForm';
import { ResultCanvas } from '../components/ResultCanvas';
import { PromptIdeas } from '../components/PromptIdeas';
import { HistoryRail } from '../components/HistoryRail';
import { FaqSection } from '../components/FaqSection';
import { buildPollinationsUrl } from '../lib/pollinations';
import type { HistoryItem, ImageFormat } from '../types/history';

const defaultPrompt = 'dreamy aurora borealis over a crystal lake, high detail';

export default function Page() {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [format, setFormat] = useState<ImageFormat>('square');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [displayPrompt, setDisplayPrompt] = useState(defaultPrompt);

  const generateImage = useCallback(
    (nextPrompt?: string, nextFormat?: ImageFormat) => {
      const targetPrompt = (nextPrompt ?? prompt).trim() || defaultPrompt;
      const targetFormat = nextFormat ?? format;

      setIsLoading(true);
      setDisplayPrompt(targetPrompt);
      const url = buildPollinationsUrl(targetPrompt, targetFormat);
      setImageUrl(url);

      setHistory((prev) => {
        const nextHistory = [
          {
            id: url,
            prompt: targetPrompt,
            imageUrl: url,
            format: targetFormat
          },
          ...prev.filter((item) => item.id !== url)
        ];
        return nextHistory.slice(0, 8);
      });
    },
    [prompt, format]
  );

  const handleHistorySelect = useCallback((item: HistoryItem) => {
    setPrompt(item.prompt);
    setFormat(item.format);
    setImageUrl(item.imageUrl);
    setDisplayPrompt(item.prompt);
    setIsLoading(false);
  }, []);

  const handleIdeaSelect = useCallback(
    (idea: string) => {
      setPrompt(idea);
      setFormat('square');
      generateImage(idea, 'square');
    },
    [generateImage]
  );

  return (
    <main>
      <header className="hero">
        <div className="hero__eyebrow">DreamCanvas AI</div>
        <h1>Transform words into vibrant worlds.</h1>
        <p>
          Craft compelling visuals for campaigns, prototypes, and moodboards in seconds. Type a detailed prompt, tweak the aspect ratio, and DreamCanvas conjures the scene.
        </p>
      </header>

      <section className="studio">
        <div className="studio__form">
          <PromptForm
            prompt={prompt}
            onPromptChange={setPrompt}
            format={format}
            onFormatChange={setFormat}
            onGenerate={generateImage}
            isLoading={isLoading}
          />
          <PromptIdeas
            onSelect={handleIdeaSelect}
          />
        </div>
        <ResultCanvas
          imageUrl={imageUrl}
          prompt={displayPrompt}
          isLoading={isLoading}
          onImageLoad={() => setIsLoading(false)}
        />
      </section>

      <HistoryRail items={history} onSelect={handleHistorySelect} />
      <FaqSection />

      <footer className="footer">
        <p>
          Built on top of Pollinations AI. Refresh to reset your session.
        </p>
        <p>
          © {new Date().getFullYear()} DreamCanvas Labs.
        </p>
      </footer>
    </main>
  );
}
