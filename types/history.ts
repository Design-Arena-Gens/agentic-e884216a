export type ImageFormat = 'square' | 'landscape' | 'portrait';

export interface HistoryItem {
  id: string;
  prompt: string;
  imageUrl: string;
  format: ImageFormat;
}
