import { motion } from 'framer-motion';
import { Car, Home as HomeIcon, Heart, Sparkles, Users, Calendar, Star, CheckCircle } from 'lucide-react';
import ServiceReveal from '../components/ServiceReveal';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: Car,
      title: 'Décoration de Véhicules',
      description: 'Transformez votre véhicule en véritable œuvre d\'art mobile pour un cortège inoubliable.',
      fullDescription: 'Des rideaux s\'ouvrent sur l\'élégance de nos décorations automobiles. Chaque véhicule devient une pièce maîtresse de votre événement.',
      features: [
        'Décoration florale élégante',
        'Rubans et nœuds sur mesure',
        'Plaques personnalisées',
        'Ballons et accessoires',
        'Installation et retrait inclus'
      ],
      image: '/images/car1.jpg',
      effectType: 'curtain',
      color: 'from-gold-600 to-gold-400'
    },
    {
      icon: HomeIcon,
      title: 'Salles de Fêtes',
      description: 'Créez une ambiance unique qui émerveillera vos invités dès leur entrée.',
      fullDescription: 'Découvrez l\'impact visuel de nos décorations de salles avec un effet zoom spectaculaire qui révèle toute la splendeur de nos créations.',
      features: [
        'Décoration murale et plafond',
        'Centres de table raffinés',
        'Éclairage d\'ambiance',
        'Arches et backdrops',
        'Coordination couleurs'
      ],
      image: '/images/salle1.jpg',
      effectType: 'zoom',
      color: 'from-primary-700 to-primary-900'
    },
    {
      icon: Heart,
      title: 'Mariages Complets',
      description: 'Un service tout-en-un pour le jour le plus important de votre vie.',
      fullDescription: 'Un voile doré se lève sur la magie de votre mariage. Chaque détail est pensé pour créer une atmosphère romantique et mémorable.',
      features: [
        'Cérémonie et réception',
        'Décor floral luxueux',
        'Chemin d\'allée romantique',
        'Table d\'honneur',
        'Coordination complète'
      ],
      image: '/images/decoration.jpg',
      effectType: 'fade',
      color: 'from-gold-500 to-gold-700'
    }
  ];

  const additionalServices = [
    { icon: Users, title: 'Événements Corporatifs', desc: 'Séminaires, conférences, lancements de produits' },
    { icon: Calendar, title: 'Anniversaires', desc: 'Décorations thématiques pour tous les âges' },
    { icon: Sparkles, title: 'Baptêmes', desc: 'Décors doux et élégants pour célébrer l\'arrivée' },
    { icon: Star, title: 'Événements Spéciaux', desc: 'Galas, inaugurations, soirées thématiques' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4af37" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-gold-400 drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Nos <span className="text-gold-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des prestations sur mesure pour sublimer tous vos événements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services avec Effets de Révélation */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Services <span className="text-gold-500">Premium</span>
            </h2>
            <p className="section-subtitle">
              Découvrez nos prestations avec des effets spectaculaires
            </p>
          </motion.div>

          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Effet de révélation */}
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <ServiceReveal
                    imageSrc={service.image}
                    title={service.title}
                    description={service.fullDescription}
                    effectType={service.effectType}
                    delay={0.3}
                  />
                </div>

                {/* Contenu texte */}
                <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${service.color} mr-4 border-2 border-gold-500 shadow-lg shadow-gold-500/30`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-primary-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>

                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gold-300 mb-6">
                    <h4 className="text-xl font-semibold text-primary-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold-600 mr-2" />
                      Inclus dans cette prestation
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-gold-500" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="btn-primary inline-block">
                    Demander un Devis
                  </Link>
                </div>
              </div>

              {/* Séparateur doré */}
              {index < mainServices.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mt-20 rounded-full"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Autres <span className="text-gold-500">Services</span></h2>
            <p className="section-subtitle">
              Nous couvrons tous types d&apos;événements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-cream-100 to-cream-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gold-300 group"
              >
                <div className="bg-gradient-to-br from-gold-500 to-gold-600 p-3 rounded-full w-fit mb-4 border-2 border-gold-400 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Notre <span className="text-gold-500">Processus</span></h2>
            <p className="section-subtitle">
              Simple, efficace et sans stress
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contact', desc: 'Contactez-nous pour discuter de votre projet' },
              { step: '02', title: 'Consultation', desc: 'Rencontre pour définir vos besoins et envies' },
              { step: '03', title: 'Préparation', desc: 'Nous préparons tout dans les moindres détails' },
              { step: '04', title: 'Jour J', desc: 'Installation et coordination le jour de l\'événement' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-6xl font-bold text-gold-400 mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] group-hover:text-gold-500 transition-colors"
                >
                  {process.step}
                </motion.div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.desc}
                </p>

                {/* Connector line doré */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gold-400 to-transparent -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        {/* Particules de fond */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-16 h-16 mx-auto mb-6 text-gold-400 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Prêt à <span className="text-gold-400">Commencer ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Demandez votre devis personnalisé gratuit dès aujourd&apos;hui
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center space-x-2">
              <span>Obtenir Mon Devis</span>
              <Sparkles className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;