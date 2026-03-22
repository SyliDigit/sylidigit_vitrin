'use client';

import { ExternalLink, ShoppingCart, Smartphone, Building2, Calendar, TrendingUp, Award, CheckCircle, ArrowRight, Code2, Palette, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

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

  const categories = ['Tous', 'E-commerce', 'Application Mobile', 'Site Web', 'Plateforme SaaS'];

  const projects = [
    {
      title: 'GuinéeShop',
      category: 'E-commerce',
      description: 'Plateforme e-commerce complète pour la vente en ligne de produits locaux avec système de paiement mobile intégré.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tags: ['Next.js', 'React', 'Stripe', 'PostgreSQL'],
      icon: ShoppingCart,
      stats: [
        { label: 'Utilisateurs', value: '10K+' },
        { label: 'Transactions', value: '50K+' },
        { label: 'Taux de conversion', value: '3.2%' }
      ],
      features: [
        'Catalogue produits avec recherche avancée',
        'Panier et checkout optimisés',
        'Paiement mobile money et cartes bancaires',
        'Dashboard vendeur avec analytics',
        'Gestion des stocks en temps réel',
        'Notifications SMS et email'
      ],
      results: 'Augmentation de 250% des ventes en ligne en 6 mois',
      duration: '3 mois',
      client: 'Entreprise de distribution'
    },
    {
      title: 'MyHealth',
      category: 'Application Mobile',
      description: 'Application mobile de gestion de rendez-vous médicaux et dossiers patients pour cliniques et hôpitaux.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      icon: Smartphone,
      stats: [
        { label: 'Téléchargements', value: '25K+' },
        { label: 'Rendez-vous gérés', value: '100K+' },
        { label: 'Note App Store', value: '4.8/5' }
      ],
      features: [
        'Prise de rendez-vous en ligne',
        'Dossier médical électronique',
        'Rappels automatiques par SMS',
        'Visioconférence pour téléconsultations',
        'Historique des consultations',
        'Gestion des ordonnances'
      ],
      results: 'Réduction de 60% du temps d\'attente et amélioration de la satisfaction patient',
      duration: '4 mois',
      client: 'Réseau de cliniques privées'
    },
    {
      title: 'BizConnect',
      category: 'Plateforme SaaS',
      description: 'Plateforme SaaS de gestion d\'entreprise tout-en-un: CRM, facturation, gestion de projets et comptabilité.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
      icon: Building2,
      stats: [
        { label: 'Entreprises clientes', value: '150+' },
        { label: 'Utilisateurs actifs', value: '2K+' },
        { label: 'Temps économisé', value: '40%' }
      ],
      features: [
        'Gestion des contacts et leads',
        'Facturation et devis automatisés',
        'Suivi des projets et tâches',
        'Tableaux de bord personnalisables',
        'Rapports financiers en temps réel',
        'Collaboration d\'équipe'
      ],
      results: 'Augmentation de 45% de la productivité des équipes commerciales',
      duration: '5 mois',
      client: 'PME africaines'
    },
    {
      title: 'EventPro Guinée',
      category: 'Site Web',
      description: 'Plateforme de billetterie et gestion d\'événements avec paiement mobile et QR codes.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      tags: ['Next.js', 'Stripe', 'QR Code', 'Email'],
      icon: Calendar,
      stats: [
        { label: 'Événements gérés', value: '500+' },
        { label: 'Billets vendus', value: '75K+' },
        { label: 'Organisateurs', value: '200+' }
      ],
      features: [
        'Création d\'événements en quelques clics',
        'Vente de billets en ligne',
        'Billets électroniques avec QR code',
        'Check-in automatisé à l\'entrée',
        'Analytics détaillés des ventes',
        'Marketing email intégré'
      ],
      results: 'Digitalisation complète de la billetterie avec élimination des fraudes',
      duration: '2.5 mois',
      client: 'Organisateurs d\'événements'
    },
    {
      title: 'AgriMarket',
      category: 'E-commerce',
      description: 'Marketplace connectant directement agriculteurs et acheteurs avec suivi des livraisons.',
      image: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Maps API'],
      icon: TrendingUp,
      stats: [
        { label: 'Agriculteurs', value: '1.5K+' },
        { label: 'Commandes', value: '25K+' },
        { label: 'Économies clients', value: '30%' }
      ],
      features: [
        'Profils agriculteurs avec produits',
        'Système de commande en gros',
        'Suivi de livraison en temps réel',
        'Paiement sécurisé échelonné',
        'Évaluations et avis',
        'Chat direct avec les producteurs'
      ],
      results: 'Augmentation de 200% des revenus des agriculteurs participants',
      duration: '4 mois',
      client: 'Coopérative agricole'
    },
    {
      title: 'EduLearn',
      category: 'Plateforme SaaS',
      description: 'Plateforme d\'apprentissage en ligne avec cours vidéo, quiz et certificats.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tags: ['React', 'Node.js', 'AWS', 'WebRTC'],
      icon: Award,
      stats: [
        { label: 'Étudiants', value: '8K+' },
        { label: 'Cours disponibles', value: '250+' },
        { label: 'Taux de complétion', value: '78%' }
      ],
      features: [
        'Bibliothèque de cours vidéo HD',
        'Quiz interactifs et examens',
        'Certificats automatiques',
        'Forums de discussion',
        'Suivi de progression',
        'Classes virtuelles en direct'
      ],
      results: 'Formation de 8000+ professionnels en 18 mois',
      duration: '5 mois',
      client: 'Instituts de formation'
    }
  ];

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const stats = [
    { value: '50+', label: 'Projets Livrés', icon: CheckCircle },
    { value: '30+', label: 'Clients Satisfaits', icon: Award },
    { value: '250K+', label: 'Utilisateurs Finaux', icon: TrendingUp },
    { value: '98%', label: 'Taux de Satisfaction', icon: Award }
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
            Notre Portfolio
          </h1>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Découvrez nos projets réussis qui ont transformé des entreprises africaines
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-center bg-gradient-to-br from-blue-50 to-sky-50/50 rounded-xl p-6 border border-blue-200/50"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-50/30 to-cyan-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-blue-200/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-24">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`fade-in opacity-0 translate-y-8 transition-all duration-1000 grid lg:grid-cols-2 gap-12 items-center`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <div className="relative h-96">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <span className="text-white font-semibold text-sm bg-blue-600/80 px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-lg p-4 border border-blue-200/50 text-center">
                          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                          <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-blue-200/50 shadow-lg mb-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-600" />
                        Fonctionnalités clés
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-sky-50/50 rounded-xl p-6 border border-blue-200/50 mb-4">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">Résultats</h4>
                          <p className="text-gray-700">{project.results}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Durée: {project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{project.client}</span>
                      </div>
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
            Prêt à créer votre succès ?
          </h2>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl mb-8 opacity-90">
            Transformons ensemble votre vision en réalité digitale
          </p>
          <a
            href="/contact"
            className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-300 inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Démarrer votre projet
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
