import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-green-900 via-emerald-900 to-green-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/SyliDigit_logo.jpeg"
              alt="SyliDigit"
              className="h-16 w-auto mb-4"
            />
            <p className="text-green-200 leading-relaxed mb-4">
              Votre partenaire de confiance pour la transformation digitale en Afrique. Solutions modernes, performantes et évolutives.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-green-200 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-green-200 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-green-200 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-green-200 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Services</h4>
            <ul className="space-y-2 text-green-200">
              <li>Développement Web</li>
              <li>Applications Mobiles</li>
              <li>Logiciels Desktop</li>
              <li>Consultation IT</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-green-200">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Conakry, Guinée</span>
              </li>
              <li className="flex items-start gap-3 text-green-200">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>+224 XXX XX XX XX</span>
              </li>
              <li className="flex items-start gap-3 text-green-200">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>contact@sylidigit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-300 text-sm">
              © {new Date().getFullYear()} SyliDigit. Tous droits réservés.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-800 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
