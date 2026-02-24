import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = pageRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={pageRef} className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-green-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 bg-clip-text text-transparent">
            Contactez-Nous
          </h1>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Discutons de votre projet et transformons vos idées en réalité
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl font-bold mb-6 text-gray-800">
                Parlez-nous de votre projet
              </h2>
              <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-lg text-gray-600 mb-8 leading-relaxed">
                Que vous ayez un projet précis en tête ou que vous souhaitiez simplement explorer les possibilités, nous sommes là pour vous écouter et vous conseiller.
              </p>

              <div className="space-y-6">
                <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-300 flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl border border-green-200/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">contact@sylidigit.com</p>
                  </div>
                </div>

                <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-400 flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl border border-green-200/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Téléphone</h3>
                    <p className="text-gray-600">+224 XXX XX XX XX</p>
                  </div>
                </div>

                <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-500 flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl border border-green-200/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Adresse</h3>
                    <p className="text-gray-600">Conakry, Guinée</p>
                  </div>
                </div>
              </div>

              <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-600 mt-8">
                <h3 className="font-bold text-gray-800 mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/50"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/50"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/50"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/50"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-700">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl p-8 border border-green-200/50 shadow-xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Message envoyé !</h3>
                    <p className="text-gray-600">Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Description du projet *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                        placeholder="Parlez-nous de votre projet..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl font-bold mb-6 text-gray-800">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-lg text-gray-600 mb-8">
            Nous répondons généralement sous 24 heures. N'hésitez pas à nous contacter pour discuter de votre vision !
          </p>
        </div>
      </section>
    </div>
  );
}
