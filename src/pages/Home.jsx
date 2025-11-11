import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Home as HomeIcon, Heart, Star, ArrowRight, CheckCircle } from 'lucide-react';
import ServiceReveal from '../components/ServiceReveal';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: Car,
      title: 'Décoration Véhicules',
      description: 'Transformez votre voiture de mariage en chef-d\'œuvre roulant avec nos décorations élégantes et personnalisées.',
      image: '/images/car1.jpg'
    },
    {
      icon: HomeIcon,
      title: 'Salles de Fêtes',
      description: 'Créez une ambiance magique et inoubliable pour votre événement avec nos décors sur mesure.',
      image: '/images/salle1.jpg'
    },
    {
      icon: Heart,
      title: 'Mariages',
      description: 'Réalisez le mariage de vos rêves avec nos services de décoration complets et raffinés.',
      image: '/images/decoration.jpg'
    }
  ];

  const features = [
    'Équipe professionnelle',
    'Décors personnalisés',
    'Matériaux premium',
    'Service clé en main',
    'Devis gratuit',
    'Disponibilité 7j/7'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Event Decoration Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            Sublimez Vos <span className="text-gold-400">Événements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          >
            Expert en décoration événementielle : mariages, véhicules, salles de fêtes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 shadow-2xl">
              Demander un Devis
              <ArrowRight className="inline-block ml-2" size={20} />
            </Link>
            <Link to="/gallery" className="btn-secondary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-2xl">
              Voir Nos Réalisations
            </Link>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center shadow-lg shadow-gold-400/30">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gold-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Reveals Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Nos Services <span className="text-gold-500">en Action</span>
            </h2>
            <p className="section-subtitle">
              Découvrez comment nous transformons vos événements
            </p>
          </motion.div>

          <div className="space-y-20">
            <ServiceReveal
              imageSrc="/images/car1.jpg"
              title="Décoration de Véhicules"
              description="Transformez votre voiture de mariage en chef-d'œuvre roulant avec nos décorations élégantes et personnalisées."
              effectType="curtain"
              delay={0}
            />

            <ServiceReveal
              imageSrc="/images/salle1.jpg"
              title="Salles de Fêtes"
              description="Créez une ambiance magique et inoubliable pour votre événement avec nos décors sur mesure."
              effectType="curtain" // L'effet "zoom" a été remplacé par "curtain"
              delay={0}
            />

            <ServiceReveal
              imageSrc="/images/decoration.jpg"
              title="Mariages"
              description="Réalisez le mariage de vos rêves avec nos services de décoration complets et raffinés."
              effectType="fade"
              delay={0}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Nos Services <span className="text-gold-500">Premium</span></h2>
            <p className="section-subtitle">
              Une expertise complète pour tous vos événements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Pourquoi Nous <span className="text-gold-500">Choisir ?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Avec des années d&apos;expérience et des centaines d&apos;événements réussis, 
                nous sommes votre partenaire idéal pour créer des moments magiques.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
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
                transition={{ duration: 5, repeat: Infinity }}
                className="relative z-10"
              >
                <img
                  src="/images/decoration.jpg"
                  alt="Décoration"
                  className="rounded-2xl shadow-2xl border-4 border-gold-400"
                />
              </motion.div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-400/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-16 h-16 mx-auto mb-6 text-gold-400 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Prêt à Créer Votre Événement de <span className="text-gold-400">Rêve ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour un devis personnalisé et gratuit
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center">
              Obtenir Mon Devis Gratuit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;