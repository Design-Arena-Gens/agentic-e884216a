import { useId } from 'react';
import type { ImageFormat } from '../types/history';

interface PromptFormProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  format: ImageFormat;
  onFormatChange: (value: ImageFormat) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const formatLabels: Record<ImageFormat, string> = {
  square: 'Square',
  landscape: 'Landscape',
  portrait: 'Portrait'
};

export function PromptForm({
  prompt,
  onPromptChange,
  format,
  onFormatChange,
  onGenerate,
  isLoading
}: PromptFormProps) {
  const promptId = useId();

  return (
    <form
      className="prompt-form"
      onSubmit={(event) => {
        event.preventDefault();
        onGenerate();
      }}
    >
      <label className="prompt-form__label" htmlFor={promptId}>
        Describe your vision
      </label>
      <textarea
        id={promptId}
        className="prompt-form__input"
        value={prompt}
        onChange={(event) => onPromptChange(event.target.value)}
        placeholder="e.g. neon cyberpunk city skyline at twilight"
        rows={4}
      />
      <div className="prompt-form__controls">
        <fieldset className="prompt-form__formats">
          <legend>Aspect ratio</legend>
          <div className="prompt-form__chips">
            {Object.entries(formatLabels).map(([key, label]) => {
              const imageFormat = key as ImageFormat;
              return (
                <button
                  type="button"
                  key={imageFormat}
                  className={`prompt-form__chip${
                    imageFormat === format ? ' prompt-form__chip--active' : ''
                  }`}
                  onClick={() => onFormatChange(imageFormat)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </fieldset>
        <button
          type="submit"
          className="prompt-form__submit"
          disabled={isLoading}
        >
          {isLoading ? 'Capturing imagination…' : 'Generate image'}
        </button>
      </div>
    </form>
  );
}
