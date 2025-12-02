import './globals.scss';
import type { Metadata } from 'next';

const title = 'DreamCanvas AI';
const description =
  'Generate AI-crafted visuals instantly. Type a prompt, get art in seconds.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://agentic-e884216a.vercel.app',
    siteName: title,
    type: 'website',
    images: [
      {
        url: 'https://image.pollinations.ai/prompt/dreamy%20aurora%20over%20a%20lake?width=1200&height=630',
        width: 1200,
        height: 630,
        alt: title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  },
  metadataBase: new URL('https://agentic-e884216a.vercel.app')
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
