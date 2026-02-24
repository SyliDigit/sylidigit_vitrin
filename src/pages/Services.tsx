import { Globe, Smartphone, Monitor, Code2, Database, Cloud, Shield, Zap, Users } from 'lucide-react';
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

  const mainServices = [
    {
      icon: Globe,
      title: 'Développement Web',
      description: 'Créez une présence en ligne professionnelle avec nos solutions web modernes et performantes.',
      features: [
        'Sites web corporate et vitrines',
        'Applications web sur mesure',
        'Plateformes e-commerce',
        'Portails d\'entreprise',
        'Progressive Web Apps (PWA)',
        'API REST et GraphQL'
      ]
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Atteignez vos clients où qu\'ils soient avec des applications mobiles intuitives et performantes.',
      features: [
        'Applications iOS natives',
        'Applications Android natives',
        'Applications cross-platform (React Native)',
        'UI/UX design mobile',
        'Intégration API backend',
        'Publication sur stores'
      ]
    },
    {
      icon: Monitor,
      title: 'Logiciels Desktop',
      description: 'Des solutions desktop robustes et évolutives pour optimiser vos processus métiers.',
      features: [
        'Applications Windows/macOS/Linux',
        'Logiciels de gestion d\'entreprise',
        'Systèmes de point de vente (POS)',
        'Applications métiers sur mesure',
        'Outils d\'automatisation',
        'Intégration systèmes existants'
      ]
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Firebase', category: 'Cloud' },
    { name: 'Git', category: 'DevOps' }
  ];

  const approach = [
    {
      icon: Users,
      title: 'Approche Collaborative',
      description: 'Nous travaillons en étroite collaboration avec vous à chaque étape du projet.'
    },
    {
      icon: Zap,
      title: 'Développement Agile',
      description: 'Méthodologie agile pour une livraison rapide et itérative de valeur.'
    },
    {
      icon: Shield,
      title: 'Sécurité Prioritaire',
      description: 'Sécurité intégrée dès la conception pour protéger vos données.'
    },
    {
      icon: Code2,
      title: 'Code de Qualité',
      description: 'Standards élevés, tests rigoureux et documentation complète.'
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
            Nos Services
          </h1>
          <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Des solutions digitales sur mesure pour transformer votre entreprise
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`fade-in opacity-0 translate-y-8 transition-all duration-1000 grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">{service.title}</h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  </div>

                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-2xl p-8 border border-green-200/50 shadow-lg">
                      <h3 className="text-xl font-bold mb-6 text-gray-800">Ce que nous offrons :</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
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

      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Technologies Utilisées
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Nous utilisons les technologies les plus modernes et éprouvées
            </p>
          </div>

          <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-400 flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-full shadow-lg border border-green-200/50 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-semibold text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Notre Approche de Développement
            </h2>
            <p className="fade-in opacity-0 translate-y-8 transition-all duration-1000 delay-200 text-xl text-gray-600 max-w-2xl mx-auto">
              Des principes qui garantissent le succès de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="fade-in opacity-0 translate-y-8 transition-all duration-1000 text-center"
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
