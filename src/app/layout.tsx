import type { Metadata } from 'next';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'SyliDigit - Transformation Digitale en Afrique',
  description: 'Votre partenaire de confiance pour la transformation digitale en Afrique. Solutions modernes, performantes et évolutives.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
          <Header />
          <div className="pt-20">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
