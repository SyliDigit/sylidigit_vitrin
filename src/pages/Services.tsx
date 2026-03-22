'use client';

import { Globe, Smartphone, Code, Database, ShoppingCart, Search, Palette, Cloud, Lock, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: Globe,
      title: 'Développement Web',
      shortDesc: 'Sites web modernes et performants adaptés à vos besoins',
      features: [
        'Sites vitrine professionnels avec design responsive',
        'Applications web complexes (React, Next.js, Vue.js)',
        'Sites e-commerce avec paiement en ligne intégré',
        'Systèmes de gestion de contenu (CMS) personnalisés',
        'Optimisation SEO pour meilleure visibilité',
        'Hébergement et maintenance continue'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      benefits: [
        'Performance optimale et temps de chargement rapide',
        'Design moderne et interface utilisateur intuitive',
        'Compatible tous navigateurs et appareils',
        'Sécurité renforcée et protection des données'
      ]
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      shortDesc: 'Applications iOS et Android natives et performantes',
      features: [
        'Applications mobiles cross-platform (React Native)',
        'Applications natives iOS et Android',
        'Applications hybrides performantes',
        'Intégration avec APIs et services tiers',
        'Notifications push et géolocalisation',
        'Publication sur App Store et Google Play'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      benefits: [
        'Une seule codebase pour iOS et Android',
        'Expérience utilisateur fluide et native',
        'Performances optimales sur tous appareils',
        'Mises à jour et maintenance simplifiées'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Solutions E-Commerce',
      shortDesc: 'Plateformes de vente en ligne complètes et sécurisées',
      features: [
        'Boutiques en ligne complètes et personnalisées',
        'Intégration paiement mobile (Orange Money, MTN, etc.)',
        'Gestion des stocks et inventaire en temps réel',
        'Tableau de bord administrateur complet',
        'Système de commande et livraison',
        'Analyses et statistiques de ventes'
      ],
      technologies: ['Next.js', 'Stripe', 'PayPal', 'PostgreSQL', 'Redis'],
      benefits: [
        'Augmentez vos ventes 24h/24 et 7j/7',
        'Réduisez les coûts opérationnels',
        'Atteignez plus de clients',
        'Suivez vos performances en temps réel'
      ]
    },
    {
      icon: Database,
      title: 'Systèmes de Gestion',
      shortDesc: 'Logiciels de gestion sur mesure pour votre entreprise',
      features: [
        'ERP (Enterprise Resource Planning) personnalisé',
        'CRM (Customer Relationship Management)',
        'Systèmes de gestion des ressources humaines',
        'Plateformes de gestion scolaire',
        'Systèmes de facturation et comptabilité',
        'Outils de gestion de projets'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'Node.js', 'Python', 'Docker'],
      benefits: [
        'Automatisation des tâches répétitives',
        'Centralisation des données entreprise',
        'Meilleure prise de décision avec analytics',
        'Gain de temps et productivité accrue'
      ]
    },
    {
      icon: Search,
      title: 'SEO & Marketing Digital',
      shortDesc: 'Améliorez votre visibilité en ligne et attirez plus de clients',
      features: [
        'Audit SEO complet de votre site web',
        'Optimisation on-page et technique',
        'Stratégie de contenu et mots-clés',
        'Campagnes Google Ads et publicité en ligne',
        'Gestion des réseaux sociaux',
        'Analytics et rapports de performance'
      ],
      technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Meta Ads'],
      benefits: [
        'Augmentation du trafic qualifié',
        'Meilleur positionnement sur Google',
        'Plus de conversions et ventes',
        'ROI mesurable et transparent'
      ]
    },
    {
      icon: Palette,
      title: 'Design UI/UX',
      shortDesc: 'Interfaces utilisateur modernes et expériences mémorables',
      features: [
        'Maquettes et prototypes interactifs',
        'Design system et charte graphique',
        'Wireframing et architecture de l\'information',
        'Tests utilisateurs et optimisation',
        'Design responsive multi-plateformes',
        'Animation et micro-interactions'
      ],
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
      benefits: [
        'Interface intuitive et facile à utiliser',
        'Design professionnel qui inspire confiance',
        'Meilleur taux de conversion',
        'Satisfaction utilisateur accrue'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Hébergement',
      shortDesc: 'Infrastructure cloud fiable et scalable',
      features: [
        'Hébergement web performant et sécurisé',
        'Migration vers le cloud (AWS, Google Cloud)',
        'Configuration serveurs et bases de données',
        'Sauvegardes automatiques et sécurité',
        'Optimisation des coûts d\'infrastructure',
        'Surveillance et monitoring 24/7'
      ],
      technologies: ['AWS', 'Google Cloud', 'Digital Ocean', 'Vercel', 'Netlify'],
      benefits: [
        'Disponibilité 99.9% garantie',
        'Évolutivité selon vos besoins',
        'Sécurité renforcée des données',
        'Support technique réactif'
      ]
    },
    {
      icon: Lock,
      title: 'Sécurité & Maintenance',
      shortDesc: 'Protection et maintenance continue de vos applications',
      features: [
        'Audit de sécurité et tests de vulnérabilité',
        'Mise en place de certificats SSL/HTTPS',
        'Mises à jour régulières et patches de sécurité',
        'Sauvegardes automatiques quotidiennes',
        'Monitoring et alertes en temps réel',
        'Support technique et assistance'
      ],
      technologies: ['SSL/TLS', 'Firewall', 'Cloudflare', 'Backup Solutions'],
      benefits: [
        'Protection contre les cyberattaques',
        'Conformité aux normes de sécurité',
        'Tranquillité d\'esprit garantie',
        'Récupération rapide en cas d\'incident'
      ]
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen">
      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-sky-50/30 to-cyan-50/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-sky-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-sky-600 to-blue-500 bg-clip-text text-transparent">
            Nos Services
          </h1>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Des solutions digitales complètes pour transformer votre entreprise
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`fade-in opacity-0 translate-y-8 transition-all duration-1000 grid lg:grid-cols-2 gap-12 items-start ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="sticky top-24">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl mb-6 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent">
                        {service.title}
                      </h2>

                      <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <div className="bg-gradient-to-br from-blue-50 to-sky-50/50 rounded-xl p-6 border border-blue-200/50 mb-8">
                        <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-blue-600" />
                          Technologies Utilisées
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 mb-6">
                      <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                        <Code className="w-6 h-6 text-blue-600" />
                        Ce que nous proposons
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl p-8 shadow-xl text-white">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <ArrowRight className="w-6 h-6" />
                        Bénéfices pour vous
                      </h3>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <a
            href="/contact"
            className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-300 inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Demander un devis gratuit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
