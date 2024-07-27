import type { Metadata, Viewport } from 'next';
import Provider from './provider';

export const metadata: Metadata = {
  title: 'Mantis Dashboard',
  description: 'Next Mantis Dashboard'
};

export const viewport: Viewport = {
  width: 'device-width',
  minimumScale: 1,
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
