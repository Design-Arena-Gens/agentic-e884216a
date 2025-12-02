import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ResultCanvasProps {
  imageUrl: string | null;
  prompt: string;
  isLoading: boolean;
  onImageLoad: () => void;
}

export function ResultCanvas({
  imageUrl,
  prompt,
  isLoading,
  onImageLoad
}: ResultCanvasProps) {
  const [statusMessage, setStatusMessage] = useState<string>('Visualize your idea.');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoading) {
      setError(null);
      setStatusMessage('Summoning pixels…');
    } else if (imageUrl) {
      setStatusMessage('Ready to download or iterate.');
    } else {
      setStatusMessage('Visualize your idea.');
    }
  }, [imageUrl, isLoading]);

  return (
    <section className="result-canvas">
      <div className="result-canvas__frame">
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={prompt || 'AI generated art'}
              fill
              sizes="(min-width: 1024px) 640px, 90vw"
              priority
              className="result-canvas__image"
              onLoadingComplete={() => {
                setError(null);
                onImageLoad();
              }}
              onError={() => {
                setError('Generation failed. Try again or rephrase your prompt.');
                onImageLoad();
              }}
            />
            {isLoading ? <div className="result-canvas__veil" /> : null}
          </>
        ) : (
          <div className="result-canvas__placeholder">
            <span className="result-canvas__sparkle" />
            <span className="result-canvas__sparkle result-canvas__sparkle--two" />
            <p className="result-canvas__placeholder-text">
              Your masterpiece appears here.
            </p>
          </div>
        )}
      </div>
      <footer className="result-canvas__footer">
        <p>{error ?? statusMessage}</p>
        {imageUrl ? (
          <a
            href={imageUrl}
            target="_blank"
            rel="noreferrer"
            className="result-canvas__download"
          >
            Download image
          </a>
        ) : null}
      </footer>
    </section>
  );
}
