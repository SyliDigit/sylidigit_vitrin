'use client';

import { Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+224 620 20 20 20',
      link: 'tel:+224620202020'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'sylidigit@gmail.com',
      link: 'mailto:sylidigit@gmail.com'
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: 'Facebook',
      link: 'https://facebook.com/sylidigit',
      bgColor: 'bg-green-800',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      link: 'https://wa.me/224620202020',
      bgColor: 'bg-green-800',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://instagram.com/sylidigit',
      bgColor: 'bg-green-800',
      hoverColor: 'hover:bg-pink-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://linkedin.com/company/sylidigit',
      bgColor: 'bg-green-800',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      icon: Send,
      name: 'X (Twitter)',
      link: 'https://x.com/sylidigit',
      bgColor: 'bg-green-800',
      hoverColor: 'hover:bg-gray-700'
    }
  ];

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
            Prêt à démarrer votre projet digital ? Parlons-en ensemble
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Nos Coordonnées
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="fade-in opacity-0 translate-y-8 transition-all duration-1000 flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl border border-green-200/50 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300"
                      style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{info.title}</h3>
                        <p className="text-gray-700 text-lg">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <h3 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-300 text-2xl font-bold mb-6 text-gray-800">
                Suivez-nous sur les réseaux sociaux
              </h3>

              <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-400 flex flex-wrap gap-4">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.bgColor} ${social.hoverColor} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl`}
                      title={social.name}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-100">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-300">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="+224 620 20 20 20"
                  />
                </div>

                <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-400">
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-500">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                  </div>
                )}

                <button
                  type="submit"
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-600 w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:from-green-700 hover:to-emerald-700 hover:-translate-y-1 transition-all duration-300"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
