import { ExternalLink, Calendar, Tag, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Portfolio() {
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

  const projects = [
    {
      title: 'Plateforme E-Commerce GuinéeShop',
      category: 'E-Commerce',
      date: '2024',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Une plateforme e-commerce complète permettant aux commerçants guinéens de vendre leurs produits en ligne avec un système de paiement mobile intégré (Orange Money, MTN Mobile Money).',
      challenge: 'Créer une solution adaptée au contexte local avec une intégration des moyens de paiement mobiles populaires en Guinée et une interface simple pour des vendeurs sans expertise technique.',
      solution: 'Développement d\'une plateforme intuitive avec tableau de bord vendeur simplifié, intégration API des opérateurs mobiles, et système de gestion des stocks en temps réel.',
      results: [
        '200+ vendeurs actifs',
        '5000+ transactions mensuelles',
        'Temps de chargement < 2 secondes',
        'Taux de conversion de 3.2%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Payment APIs'],
      link: '#'
    },
    {
      title: 'Application de Gestion Scolaire EduManage',
      category: 'Education',
      date: '2023',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Système complet de gestion scolaire avec modules pour les notes, présences, finances, et communication parents-école. Interface web et application mobile pour les parents.',
      challenge: 'Digitaliser la gestion administrative des écoles avec des fonctionnalités adaptées au système éducatif guinéen tout en restant accessible pour tous les utilisateurs.',
      solution: 'Application web responsive avec dashboard analytique avancé, application mobile pour les parents, et système de notifications automatiques pour les absences et résultats.',
      results: [
        '15 établissements équipés',
        '3000+ élèves suivis',
        'Réduction de 60% du temps administratif',
        'Satisfaction parents: 4.7/5'
      ],
      technologies: ['Vue.js', 'TypeScript', 'PostgreSQL', 'Flutter', 'PWA'],
      link: '#'
    },
    {
      title: 'Application Mobile Bancaire MoneyTransfer',
      category: 'Fintech',
      date: '2023',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Application mobile sécurisée pour transferts d\'argent instantanés, consultation de comptes et paiement de factures avec authentification biométrique.',
      challenge: 'Développer une application financière ultra-sécurisée avec une UX fluide, tout en respectant les normes bancaires strictes et en garantissant la performance même avec connexion limitée.',
      solution: 'Application React Native avec chiffrement end-to-end, mode offline pour consultation, authentification biométrique et système de cache intelligent.',
      results: [
        '50 000+ téléchargements',
        '10 000+ utilisateurs actifs',
        'Note 4.5/5 sur les stores',
        'Taux de rétention de 75%'
      ],
      technologies: ['React Native', 'Firebase', 'Node.js', 'PostgreSQL', 'Encryption'],
      link: '#'
    },
    {
      title: 'Système POS pour Restaurant ChainFood',
      category: 'Restauration',
      date: '2024',
      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Solution point de vente (POS) complète pour chaîne de restaurants avec gestion des commandes, stocks, employés et reporting en temps réel.',
      challenge: 'Créer un système POS robuste fonctionnant même sans connexion internet, avec synchronisation automatique et interface rapide pour le personnel.',
      solution: 'Application desktop cross-platform avec mode offline complet, synchronisation intelligente, et interface tactile optimisée pour la rapidité.',
      results: [
        '8 restaurants équipés',
        'Réduction de 40% des erreurs de commande',
        'Temps de service réduit de 30%',
        'ROI atteint en 6 mois'
      ],
      technologies: ['Electron', 'React', 'SQLite', 'Node.js', 'REST API'],
      link: '#'
    },
    {
      title: 'Portail Entreprise HRConnect',
      category: 'RH & Gestion',
      date: '2023',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Portail intranet d\'entreprise avec modules RH (congés, fiches de paie), gestion documentaire, et outils de collaboration pour équipes distribuées.',
      challenge: 'Centraliser tous les processus RH et administratifs dans une plateforme unique, intuitive et sécurisée accessible de partout.',
      solution: 'Plateforme web moderne avec authentification SSO, workflows automatisés, signature électronique et intégration avec systèmes existants.',
      results: [
        '500+ employés utilisateurs',
        'Traitement des congés automatisé à 90%',
        'Réduction de 70% du papier',
        'Temps de traitement divisé par 3'
      ],
      technologies: ['Angular', 'Python', 'Django', 'PostgreSQL', 'Docker'],
      link: '#'
    },
    {
      title: 'Marketplace Agricole AgriConnect',
      category: 'Agriculture',
      date: '2024',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Plateforme connectant directement agriculteurs et acheteurs, avec système de géolocalisation des produits, prix en temps réel et logistique intégrée.',
      challenge: 'Créer un pont entre producteurs ruraux (parfois avec accès limité à internet) et acheteurs urbains, avec interface accessible et informations fiables.',
      solution: 'Application progressive (PWA) ultra-légère, système de SMS pour notifications importantes, et dashboard web complet pour les acheteurs professionnels.',
      results: [
        '300+ agriculteurs inscrits',
        '2000+ transactions réalisées',
        'Prix plus justes pour producteurs (+25%)',
        'Réduction du gaspillage de 40%'
      ],
      technologies: ['Next.js', 'React', 'MongoDB', 'SMS API', 'Maps API'],
      link: '#'
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
            Notre Portfolio
          </h1>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Des projets concrets qui transforment les entreprises africaines
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className="fade-in opacity-0 translate-y-8 transition-all duration-1000"
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-4 text-white">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                            {project.category}
                          </span>
                          <span className="flex items-center gap-1 text-sm">
                            <Calendar className="w-4 h-4" />
                            {project.date}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                        <ExternalLink className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">{project.title}</h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-red-50 to-orange-50/50 rounded-xl p-6 border border-red-200/50">
                        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          Défi
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50/50 rounded-xl p-6 border border-blue-200/50">
                        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          Solution
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl p-6 border border-green-200/50">
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                          Résultats
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {project.results.map((result, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-green-600 mt-1">✓</span>
                              <span className="text-gray-700 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <Tag className="w-5 h-5 text-gray-600" />
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Prêt à créer votre succès ?
          </h2>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-700 mb-8">
            Rejoignez nos clients satisfaits et transformez votre entreprise
          </p>
        </div>
      </section>
    </div>
  );
}
