'use client';

import { ArrowRight, Sparkles, Globe, Smartphone, Monitor, Search, Palette, Code, CheckCircle, Rocket, ExternalLink, ChevronLeft, ChevronRight, Target, Eye, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      badge: 'Innovation Digitale en Afrique',
      title: 'Construisons le futur digital de l\'Afrique',
      description: 'SyliDigit accompagne les entreprises dans leur transformation digitale avec des solutions modernes, performantes et évolutives.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600',
      button1Text: 'Nos Services',
      button1Link: '/services',
      button2Text: 'Nous contacter',
      button2Link: '/contact'
    },
    {
      badge: 'Notre Mission',
      title: 'Transformer l\'Afrique par le digital',
      description: 'Accompagner les entreprises africaines dans leur transformation digitale en offrant des solutions sur mesure qui créent de la valeur durable.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600',
      button1Text: 'En savoir plus',
      button1Link: '/a-propos',
      button2Text: 'Nos projets',
      button2Link: '/portfolio'
    },
    {
      badge: 'Notre Vision',
      title: 'Le partenaire digital de référence en Afrique',
      description: 'Devenir le leader en Afrique de l\'Ouest en créant des solutions technologiques qui transforment les entreprises et améliorent la vie des citoyens.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600',
      button1Text: 'Notre vision',
      button1Link: '/a-propos',
      button2Text: 'Contactez-nous',
      button2Link: '/contact'
    },
    {
      badge: 'Nos Valeurs',
      title: 'Excellence, Passion, Innovation',
      description: 'Nous visons l\'excellence dans chaque projet, guidés par notre passion pour la technologie et un engagement constant vers l\'innovation.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600',
      button1Text: 'Découvrir nos valeurs',
      button1Link: '/a-propos',
      button2Text: 'Travailler avec nous',
      button2Link: '/contact'
    },
    {
      badge: 'Nos Services',
      title: 'Des solutions digitales complètes',
      description: 'Développement web, applications mobiles, logiciels desktop - toutes les solutions dont votre entreprise a besoin pour réussir sa transformation digitale.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1600',
      button1Text: 'Voir tous nos services',
      button1Link: '/services',
      button2Text: 'Demander un devis',
      button2Link: '/contact'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const services = [
    {
      icon: Globe,
      title: 'Développement Web',
      description: 'Sites web modernes et performants, applications web sur mesure.'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Applications iOS et Android pour une expérience optimale.'
    },
    {
      icon: Monitor,
      title: 'Logiciels Desktop',
      description: 'Solutions desktop puissantes adaptées à vos besoins.'
    }
  ];

  const processSteps = [
    { icon: Search, title: 'Analyse' },
    { icon: Palette, title: 'Conception' },
    { icon: Code, title: 'Développement' },
    { icon: CheckCircle, title: 'Tests' },
    { icon: Rocket, title: 'Déploiement' }
  ];

  const projects = [
    {
      title: 'Plateforme E-Commerce',
      description: 'Solution complète de vente en ligne',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Application de Gestion',
      description: 'Système de gestion avec analytics',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'App Mobile Bancaire',
      description: 'Application mobile sécurisée',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div ref={pageRef}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-emerald-900/50 to-green-800/60"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-green-500/10 rounded-full blur-3xl animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div
            key={`badge-${currentSlide}`}
            className="fade-in opacity-0 translate-y-8 transition-all duration-1000 animate-in"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg mb-8 border border-green-200/50">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">{slides[currentSlide].badge}</span>
            </div>
          </div>

          <h1
            key={`title-${currentSlide}`}
            className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 animate-in text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight drop-shadow-2xl"
            style={{ textShadow: '0 0 40px rgba(250, 204, 21, 0.5)' }}
          >
            {slides[currentSlide].title}
          </h1>

          <p
            key={`desc-${currentSlide}`}
            className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-400 animate-in text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {slides[currentSlide].description}
          </p>

          <div
            key={`buttons-${currentSlide}`}
            className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-600 animate-in flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href={slides[currentSlide].button1Link}
              className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              {slides[currentSlide].button1Text}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={slides[currentSlide].button2Link}
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              {slides[currentSlide].button2Text}
            </Link>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Slide suivant"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-green-500 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Nos Services
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions digitales complètes pour accélérer votre croissance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 group relative bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl p-8 border border-green-200/50 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500"
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-800 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
            >
              En savoir plus
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Notre Méthode
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche éprouvée en 5 étapes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-center"
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-gray-800">{step.title}</p>
                </div>
              );
            })}
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-800 text-center">
            <Link
              href="/methode"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
            >
              Découvrir notre méthode
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Nos Réalisations
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Des projets qui illustrent notre expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="fade-in opacity-0 translate-y-8 transition-all duration-1000 group"
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-green-200/50 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500">
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-800 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
            >
              Voir tous nos projets
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Vous avez un projet ? Parlons-en.
          </h2>

          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous dès aujourd'hui pour discuter de votre vision et découvrir comment nous pouvons vous aider à la concrétiser.
          </p>

          <Link
            href="/contact"
            className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-400 inline-flex items-center gap-3 px-10 py-5 bg-white text-green-700 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 hover:bg-green-50 transition-all duration-300"
          >
            Démarrer Votre Projet
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
