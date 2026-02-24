import { Target, Eye, MapPin, Users, Award, Heart, Zap, Globe2, HeadphonesIcon, Layers, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function About() {
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

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque ligne de code, chaque design, et chaque interaction client.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par la technologie et son pouvoir de transformer les entreprises africaines.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Le succès de nos clients est notre succès. Nous travaillons main dans la main avec vous.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Nous restons à la pointe des technologies pour offrir des solutions modernes et performantes.'
    }
  ];

  const reasons = [
    {
      icon: Award,
      title: 'Expertise Technique',
      description: 'Maîtrise des technologies modernes et meilleures pratiques du développement'
    },
    {
      icon: Globe2,
      title: 'Compréhension du Marché Local',
      description: 'Connaissance approfondie des besoins et défis spécifiques au contexte africain'
    },
    {
      icon: HeadphonesIcon,
      title: 'Support Fiable',
      description: 'Accompagnement continu et assistance technique réactive en français'
    },
    {
      icon: Layers,
      title: 'Technologies Modernes',
      description: 'Solutions basées sur les frameworks et outils les plus performants'
    },
    {
      icon: TrendingUp,
      title: 'Approche Orientée Résultats',
      description: 'Focus sur la création de valeur mesurable pour votre entreprise'
    }
  ];

  const stats = [
    { value: '50+', label: 'Projets Réalisés' },
    { value: '30+', label: 'Clients Satisfaits' },
    { value: '5', label: 'Ans d\'Expérience' },
    { value: '98%', label: 'Taux de Satisfaction' }
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
            À Propos de SyliDigit
          </h1>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Votre partenaire de confiance pour la transformation digitale en Afrique
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Qui Sommes-Nous ?
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200">
                  <span className="font-bold text-green-700">SyliDigit</span> est une entreprise de développement digital basée en Guinée, spécialisée dans la création de solutions technologiques innovantes adaptées au contexte africain.
                </p>
                <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-300">
                  Fondée par des développeurs passionnés, notre mission est de démocratiser l'accès aux technologies modernes et d'accompagner les entreprises africaines dans leur transformation digitale.
                </p>
                <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-400">
                  Nous combinons expertise technique internationale et compréhension profonde des besoins locaux pour offrir des solutions qui génèrent un impact réel et mesurable.
                </p>
              </div>

              <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-500 mt-8 flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl border border-green-200/50">
                <MapPin className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">Basé à Conakry, Guinée</h3>
                  <p className="text-gray-700">
                    Au cœur de l'Afrique de l'Ouest, nous servons les entreprises locales et internationales avec la même excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-600 bg-white rounded-2xl p-8 shadow-xl border border-green-200/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Notre Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Devenir le partenaire digital de référence en Afrique de l'Ouest, en créant des solutions technologiques qui transforment les entreprises et améliorent la vie des citoyens africains.
                </p>
              </div>

              <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-700 bg-white rounded-2xl p-8 shadow-xl border border-green-200/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Notre Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Accompagner les entreprises africaines dans leur transformation digitale en leur offrant des solutions sur mesure, performantes et évolutives qui répondent à leurs défis spécifiques et créent de la valeur durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Nos Valeurs
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 bg-white rounded-xl p-8 border border-green-200/50 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500"
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Quelques Chiffres
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Notre impact en quelques statistiques
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-center bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-xl p-8 border border-green-200/50 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500"
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Pourquoi Choisir SyliDigit ?
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Les raisons qui font de nous le partenaire idéal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 bg-white rounded-xl p-8 border border-green-200/50 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-500"
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
