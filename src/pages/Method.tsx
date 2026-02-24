import { Search, Palette, Code, CheckCircle, Rocket, Users, FileText, Lightbulb, TestTube, Headphones } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Method() {
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

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Analyse des Besoins',
      subtitle: 'Comprendre votre vision',
      description: 'Nous commençons par une analyse approfondie de vos besoins, objectifs et défis. Cette phase cruciale nous permet de bien comprendre votre contexte, votre marché et vos utilisateurs cibles.',
      activities: [
        'Rencontres avec les parties prenantes',
        'Analyse du marché et de la concurrence',
        'Définition des objectifs mesurables',
        'Identification des contraintes techniques',
        'Étude de faisabilité',
        'Rédaction du cahier des charges'
      ],
      deliverables: [
        'Document d\'analyse détaillé',
        'Cahier des charges validé',
        'Planning projet initial'
      ]
    },
    {
      number: '02',
      icon: Palette,
      title: 'Conception UX/UI',
      subtitle: 'Design moderne et intuitif',
      description: 'Nous créons une expérience utilisateur optimale en concevant des interfaces modernes, intuitives et alignées avec votre identité de marque. Cette phase garantit que votre solution sera à la fois belle et fonctionnelle.',
      activities: [
        'Recherche utilisateur et personas',
        'Architecture de l\'information',
        'Création de wireframes',
        'Design des maquettes haute fidélité',
        'Prototypage interactif',
        'Tests utilisateurs préliminaires'
      ],
      deliverables: [
        'Maquettes UI complètes',
        'Prototype interactif',
        'Guide de style et charte graphique'
      ]
    },
    {
      number: '03',
      icon: Code,
      title: 'Développement',
      subtitle: 'Code propre et performant',
      description: 'Nos développeurs transforment les designs en solutions fonctionnelles en utilisant les meilleures pratiques et technologies modernes. Nous suivons une approche agile pour garantir flexibilité et qualité.',
      activities: [
        'Configuration de l\'environnement',
        'Développement par sprints agiles',
        'Revues de code régulières',
        'Intégration continue',
        'Documentation technique',
        'Démos régulières avec le client'
      ],
      deliverables: [
        'Code source versionné',
        'Documentation technique',
        'Builds réguliers pour tests'
      ]
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Tests & Validation',
      subtitle: 'Qualité et fiabilité garanties',
      description: 'Nous effectuons des tests rigoureux pour garantir que votre solution fonctionne parfaitement dans tous les scénarios. La qualité est notre priorité absolue.',
      activities: [
        'Tests unitaires et d\'intégration',
        'Tests de performance',
        'Tests de sécurité',
        'Tests d\'accessibilité',
        'Tests utilisateurs (UAT)',
        'Correction des bugs identifiés'
      ],
      deliverables: [
        'Rapports de tests détaillés',
        'Application validée et stable',
        'Documentation utilisateur'
      ]
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Déploiement & Support',
      subtitle: 'Mise en ligne et accompagnement',
      description: 'Nous gérons le déploiement de votre solution et vous accompagnons après le lancement pour assurer son succès. Notre support ne s\'arrête pas à la livraison.',
      activities: [
        'Configuration de l\'infrastructure',
        'Migration des données si nécessaire',
        'Déploiement en production',
        'Formation des utilisateurs',
        'Monitoring et optimisation',
        'Support technique continu'
      ],
      deliverables: [
        'Application en production',
        'Documentation complète',
        'Plan de maintenance et support'
      ]
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: 'Communication Transparente',
      description: 'Vous êtes impliqué à chaque étape avec des points réguliers'
    },
    {
      icon: Lightbulb,
      title: 'Flexibilité Agile',
      description: 'Adaptation rapide aux changements et nouvelles idées'
    },
    {
      icon: FileText,
      title: 'Documentation Complète',
      description: 'Livrables clairs et documentation technique détaillée'
    },
    {
      icon: TestTube,
      title: 'Qualité Assurée',
      description: 'Tests rigoureux et standards de qualité élevés'
    },
    {
      icon: Headphones,
      title: 'Support Dédié',
      description: 'Accompagnement continu même après la livraison'
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
            Notre Méthode
          </h1>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Une approche éprouvée en 5 étapes pour garantir le succès de votre projet
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-emerald-500 to-green-600"></div>

            <div className="space-y-24">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="fade-in opacity-0 translate-y-8 transition-all duration-1000 relative"
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="md:pl-24">
                      <div className="hidden md:flex absolute left-0 w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full items-center justify-center shadow-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl p-8 border border-green-200/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="md:hidden w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <span className="text-green-600 font-bold text-xl">{step.number}</span>
                            <h2 className="text-3xl font-bold mb-2 text-gray-800">{step.title}</h2>
                            <p className="text-lg text-green-700 font-semibold">{step.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                          {step.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                              Activités
                            </h3>
                            <ul className="space-y-2">
                              {step.activities.map((activity, i) => (
                                <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                  <span className="text-green-600 mt-1">•</span>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                              Livrables
                            </h3>
                            <ul className="space-y-2">
                              {step.deliverables.map((deliverable, i) => (
                                <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                  <span className="text-emerald-600 mt-1">✓</span>
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Les Avantages de Notre Méthode
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Une approche qui maximise vos chances de succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 bg-white rounded-xl p-6 border border-green-200/50 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500"
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
