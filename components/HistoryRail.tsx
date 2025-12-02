import Image from 'next/image';
import type { HistoryItem } from '../types/history';

interface HistoryRailProps {
  items: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

export function HistoryRail({ items, onSelect }: HistoryRailProps) {
  if (!items.length) {
    return null;
  }

  return (
    <aside className="history-rail">
      <h2>Recent renders</h2>
      <div className="history-rail__grid">
        {items.map((item) => (
          <button
            type="button"
            key={item.id}
            className="history-rail__item"
            onClick={() => onSelect(item)}
            title={item.prompt}
          >
            <div className="history-rail__thumb">
              <Image
                src={item.imageUrl}
                alt={item.prompt}
                fill
                sizes="160px"
              />
            </div>
            <p>{item.prompt}</p>
          </button>
        ))}
      </div>
    </aside>
  );
}
