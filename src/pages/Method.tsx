'use client';

import { Lightbulb, FileSearch, Code2, TestTube, Rocket, HeadphonesIcon, CheckCircle, ArrowRight, Clock, Users, MessageSquare, Wrench, Search, Palette, FileCode, Bug, RefreshCcw } from 'lucide-react';
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

  const phases = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Découverte & Analyse',
      subtitle: 'Comprendre vos besoins en profondeur',
      duration: '1-2 semaines',
      description: 'Cette phase cruciale nous permet de comprendre votre entreprise, vos objectifs et vos contraintes pour proposer la solution la plus adaptée.',
      activities: [
        {
          icon: MessageSquare,
          title: 'Entretiens détaillés',
          description: 'Rencontres avec les parties prenantes pour comprendre vos besoins, défis et objectifs business'
        },
        {
          icon: FileSearch,
          title: 'Analyse de l\'existant',
          description: 'Étude de vos systèmes actuels, processus métier et infrastructure technique'
        },
        {
          icon: Users,
          title: 'Identification des utilisateurs',
          description: 'Analyse des différents profils utilisateurs et de leurs besoins spécifiques'
        },
        {
          icon: Search,
          title: 'Étude de marché',
          description: 'Analyse de la concurrence et des meilleures pratiques dans votre secteur'
        }
      ],
      deliverables: [
        'Document de spécifications fonctionnelles détaillé',
        'Personas et parcours utilisateurs',
        'Analyse de faisabilité technique',
        'Estimation budgétaire précise'
      ]
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design & Architecture',
      subtitle: 'Concevoir une solution optimale',
      duration: '2-3 semaines',
      description: 'Nous créons l\'architecture technique et le design de votre solution pour garantir performance, évolutivité et expérience utilisateur exceptionnelle.',
      activities: [
        {
          icon: Palette,
          title: 'Design UI/UX',
          description: 'Création de maquettes interactives et prototype cliquable pour valider l\'expérience utilisateur'
        },
        {
          icon: FileCode,
          title: 'Architecture technique',
          description: 'Définition de l\'architecture système, choix des technologies et structure de la base de données'
        },
        {
          icon: Wrench,
          title: 'Planification technique',
          description: 'Découpage en modules, définition des APIs et des intégrations tierces'
        },
        {
          icon: CheckCircle,
          title: 'Validation client',
          description: 'Présentation des maquettes et de l\'architecture pour validation avant développement'
        }
      ],
      deliverables: [
        'Maquettes UI/UX complètes et interactives',
        'Charte graphique et design system',
        'Schéma d\'architecture technique détaillé',
        'Cahier des charges technique validé'
      ]
    },
    {
      number: '03',
      icon: Code2,
      title: 'Développement',
      subtitle: 'Construire votre solution sur mesure',
      duration: '4-12 semaines',
      description: 'Notre équipe développe votre solution en suivant les meilleures pratiques de développement et en vous tenant informé de l\'avancement.',
      activities: [
        {
          icon: Code2,
          title: 'Développement Agile',
          description: 'Développement par sprints de 2 semaines avec démonstrations régulières des fonctionnalités'
        },
        {
          icon: RefreshCcw,
          title: 'Intégration continue',
          description: 'Mise en place de pipelines CI/CD pour des déploiements automatisés et sécurisés'
        },
        {
          icon: Users,
          title: 'Revues régulières',
          description: 'Points d\'avancement hebdomadaires et démonstrations pour recueillir vos feedbacks'
        },
        {
          icon: FileCode,
          title: 'Documentation',
          description: 'Rédaction de la documentation technique et des guides utilisateurs au fil du développement'
        }
      ],
      deliverables: [
        'Code source propre et commenté',
        'Versions de démo régulières',
        'Documentation technique complète',
        'Rapports d\'avancement hebdomadaires'
      ]
    },
    {
      number: '04',
      icon: TestTube,
      title: 'Tests & Qualité',
      subtitle: 'Garantir la fiabilité et la performance',
      duration: '1-2 semaines',
      description: 'Tests rigoureux pour garantir que votre solution fonctionne parfaitement dans tous les scénarios d\'usage.',
      activities: [
        {
          icon: Bug,
          title: 'Tests fonctionnels',
          description: 'Vérification complète de toutes les fonctionnalités selon les spécifications'
        },
        {
          icon: TestTube,
          title: 'Tests de performance',
          description: 'Optimisation des temps de chargement et tests de montée en charge'
        },
        {
          icon: Users,
          title: 'Tests utilisateurs',
          description: 'Tests avec de vrais utilisateurs pour valider l\'ergonomie et l\'intuitivité'
        },
        {
          icon: CheckCircle,
          title: 'Recette client',
          description: 'Validation finale avec vous selon le cahier de recette établi'
        }
      ],
      deliverables: [
        'Rapports de tests détaillés',
        'Corrections de tous les bugs identifiés',
        'Optimisations de performance',
        'Procès-verbal de recette signé'
      ]
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Déploiement',
      subtitle: 'Mise en production en toute sécurité',
      duration: '1 semaine',
      description: 'Lancement de votre solution en production avec accompagnement pour assurer une transition en douceur.',
      activities: [
        {
          icon: Wrench,
          title: 'Configuration production',
          description: 'Setup de l\'environnement de production avec toutes les sécurités et optimisations'
        },
        {
          icon: Rocket,
          title: 'Migration des données',
          description: 'Transfert sécurisé des données existantes vers le nouveau système si nécessaire'
        },
        {
          icon: Users,
          title: 'Formation utilisateurs',
          description: 'Sessions de formation pour vos équipes sur l\'utilisation de la solution'
        },
        {
          icon: CheckCircle,
          title: 'Mise en ligne',
          description: 'Déploiement final avec monitoring actif pour identifier tout problème rapidement'
        }
      ],
      deliverables: [
        'Application déployée en production',
        'Guides utilisateurs et administrateurs',
        'Formation complète des équipes',
        'Plan de monitoring et alertes'
      ]
    },
    {
      number: '06',
      icon: HeadphonesIcon,
      title: 'Maintenance & Support',
      subtitle: 'Accompagnement continu',
      duration: 'Continu',
      description: 'Support technique réactif et maintenance évolutive pour garantir la pérennité et l\'amélioration continue de votre solution.',
      activities: [
        {
          icon: HeadphonesIcon,
          title: 'Support technique',
          description: 'Assistance réactive par email, téléphone ou chat pour résoudre tout problème'
        },
        {
          icon: Bug,
          title: 'Corrections de bugs',
          description: 'Résolution rapide de tout dysfonctionnement identifié en production'
        },
        {
          icon: RefreshCcw,
          title: 'Mises à jour',
          description: 'Mises à jour de sécurité et des dépendances pour maintenir la solution à jour'
        },
        {
          icon: Rocket,
          title: 'Évolutions',
          description: 'Ajout de nouvelles fonctionnalités selon vos besoins qui évoluent'
        }
      ],
      deliverables: [
        'Support technique réactif (24-48h)',
        'Mises à jour de sécurité régulières',
        'Sauvegardes automatiques quotidiennes',
        'Rapports mensuels de performance'
      ]
    }
  ];

  const methodology = [
    {
      icon: Users,
      title: 'Approche Collaborative',
      description: 'Nous travaillons main dans la main avec vous à chaque étape, en recueillant vos feedbacks régulièrement pour garantir que le résultat final correspond exactement à vos attentes.'
    },
    {
      icon: RefreshCcw,
      title: 'Méthodologie Agile',
      description: 'Développement itératif par sprints courts permettant flexibilité et adaptation rapide aux changements de besoins ou priorités.'
    },
    {
      icon: Clock,
      title: 'Transparence Totale',
      description: 'Suivi en temps réel de l\'avancement, démonstrations régulières et communication ouverte sur les défis et solutions.'
    },
    {
      icon: CheckCircle,
      title: 'Qualité Premium',
      description: 'Code propre, tests rigoureux, documentation complète et respect des meilleures pratiques de développement pour garantir pérennité et maintenabilité.'
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
            Notre Méthode de Travail
          </h1>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Un processus éprouvé pour garantir le succès de votre projet digital
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Notre Philosophie
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Une approche structurée qui met votre succès au centre
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl p-6 border border-green-200/50 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Les 6 Phases de Votre Projet
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus structuré de la conception au déploiement
            </p>
          </div>

          <div className="space-y-24">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`fade-in opacity-0 translate-y-8 transition-all duration-1000 grid lg:grid-cols-2 gap-12 items-start`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`${isEven ? '' : 'lg:order-2'}`}>
                    <div className="sticky top-24">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-6xl font-bold text-green-600/20">
                          {phase.number}
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
                        {phase.title}
                      </h3>
                      <p className="text-xl text-green-600 font-semibold mb-4">
                        {phase.subtitle}
                      </p>

                      <div className="inline-flex items-center gap-2 bg-gradient-to-br from-green-50 to-emerald-50/50 px-4 py-2 rounded-full border border-green-200/50 mb-6">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-gray-700">{phase.duration}</span>
                      </div>

                      <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {phase.description}
                      </p>

                      <div className="bg-white rounded-xl p-6 border border-green-200/50 shadow-lg">
                        <h4 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Livrables de cette phase
                        </h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                              <span className="text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
                    {phase.activities.map((activity, i) => {
                      const ActivityIcon = activity.icon;
                      return (
                        <div
                          key={i}
                          className="bg-white rounded-xl p-6 shadow-xl border border-green-200/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <ActivityIcon className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-800 mb-2">
                                {activity.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl mb-8 opacity-90">
            Discutons de votre projet et voyons comment notre méthode peut vous aider à atteindre vos objectifs
          </p>
          <a
            href="/contact"
            className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-300 inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Planifier un appel découverte
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
