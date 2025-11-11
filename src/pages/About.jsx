import { motion } from 'framer-motion';
import { Heart, Users, Award, Target, Clock, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Chaque projet est réalisé avec amour et dévouement pour créer des moments magiques'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons la perfection dans chaque détail de nos créations'
    },
    {
      icon: Users,
      title: 'Écoute',
      description: 'Votre vision est notre priorité, nous transformons vos rêves en réalité'
    },
    {
      icon: Target,
      title: 'Créativité',
      description: 'Des concepts uniques et originaux pour des événements mémorables'
    }
  ];

  const team = [
    {
      name: 'Marie Dupont',
      role: 'Fondatrice & Directrice Créative',
      image: '/images/decoration.jpg'
    },
    {
      name: 'Jean Martin',
      role: 'Chef Décorateur',
      image: '/images/car1.jpg'
    },
    {
      name: 'Sophie Bernard',
      role: 'Coordinatrice Événements',
      image: '/images/salle1.jpg'
    }
  ];

  const timeline = [
    { year: '2014', event: 'Création de l\'entreprise', desc: 'Début de l\'aventure avec passion' },
    { year: '2016', event: '100ème Événement', desc: 'Première grande étape franchie' },
    { year: '2019', event: 'Expansion', desc: 'Agrandissement de l\'équipe et des services' },
    { year: '2023', event: '500+ Événements', desc: 'Des centaines de clients satisfaits' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #d4af37 2px, transparent 2px)',
              backgroundSize: '80px 80px'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-gold-400 drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Notre <span className="text-gold-400">Histoire</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une passion transformée en expertise pour sublimer vos événements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Qui <span className="text-gold-500">Sommes-Nous ?</span></h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  <strong className="text-gold-600">Event Décor</strong> est né de la passion de créer des moments inoubliables. 
                  Depuis plus de 10 ans, nous transformons les rêves en réalité à travers nos services de décoration événementielle.
                </p>
                <p>
                  Notre équipe de professionnels créatifs met tout son savoir-faire et son expérience 
                  au service de vos projets. Que ce soit pour un mariage, un anniversaire ou tout autre 
                  événement spécial, nous créons des ambiances uniques qui reflètent votre personnalité.
                </p>
                <p>
                  Chaque détail compte, et c'est cette attention méticuleuse qui fait la différence 
                  entre un événement ordinaire et un moment extraordinaire que vous et vos invités 
                  n'oublierez jamais.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 bg-cream-100 px-4 py-2 rounded-full border-2 border-gold-400">
                  <Clock className="w-6 h-6 text-gold-600" />
                  <span className="text-gray-700 font-semibold">10+ Années</span>
                </div>
                <div className="flex items-center space-x-3 bg-cream-100 px-4 py-2 rounded-full border-2 border-gold-400">
                  <Shield className="w-6 h-6 text-gold-600" />
                  <span className="text-gray-700 font-semibold">Garantie Qualité</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 3, 0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative"
              >
                <img
                  src="/images/decoration.jpg"
                  alt="Notre équipe"
                  className="rounded-2xl shadow-2xl border-4 border-gold-400"
                />
              </motion.div>
              
              {/* Floating elements dorés */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gold-400/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/30 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nos <span className="text-gold-500">Valeurs</span></h2>
            <p className="section-subtitle">
              Les principes qui guident notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center group border-2 border-gray-200 hover:border-gold-400 transition-all"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="inline-block p-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-4 border-2 border-gold-400 shadow-lg shadow-gold-500/30"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Notre <span className="text-gold-500">Parcours</span></h2>
            <p className="section-subtitle">
              Une décennie de passion et d'excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line dorée */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-300 transform -translate-x-1/2 shadow-lg shadow-gold-500/30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 === 0 && (
                      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gold-400">
                        <h3 className="text-3xl font-bold text-gold-600 mb-2">
                          {item.event}
                        </h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-xl border-4 border-gold-400 shadow-gold-500/50"
                  >
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gold-400">
                        <h3 className="text-3xl font-bold text-gold-600 mb-2">
                          {item.event}
                        </h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Notre <span className="text-gold-500">Équipe</span></h2>
            <p className="section-subtitle">
              Les talents derrière vos événements parfaits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group border-2 border-gray-200 hover:border-gold-400 transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center bg-gradient-to-b from-white to-cream-100">
                  <h3 className="text-2xl font-semibold text-primary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Travaillons <span className="text-gold-400">Ensemble</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partagez-nous votre projet et laissez-nous créer quelque chose d'extraordinaire
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">
              Contactez-Nous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;