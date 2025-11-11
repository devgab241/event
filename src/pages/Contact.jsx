import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
// Import des icônes de Lucide
import { Phone, MapPin, Clock, CheckCircle } from 'lucide-react'; 
// Import du logo de marque WhatsApp
import { FaWhatsapp } from 'react-icons/fa'; 

// Remplacement du numéro générique par le nouveau
const WHATSAPP_NUMBER = '21655781043';
const FORMATTED_PHONE = '+216 55 781 043';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fonction pour générer le lien WhatsApp
  const generateWhatsAppLink = useCallback(() => {
    const { name, phone, eventType, date, message } = formData;
    
    // Construction du message pré-rempli
    let whatsappMessage = `Bonjour, je souhaite obtenir un devis pour la décoration d'un événement.\n\n`;
    whatsappMessage += `Nom: ${name || 'Non spécifié'}\n`;
    whatsappMessage += `Téléphone: ${phone || 'Non spécifié'}\n`;
    whatsappMessage += `Type d'événement: ${eventType || 'Non spécifié'}\n`;
    whatsappMessage += `Date souhaitée: ${date || 'Non spécifiée'}\n`;
    whatsappMessage += `Détails: ${message || 'Aucune description fournie.'}`;

    // Encodage du message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }, [formData]);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs requis (si vous souhaitez la maintenir)
    if (!formData.name || !formData.phone || !formData.eventType || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires (*).');
      return;
    }

    // Redirection vers WhatsApp
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      info: FORMATTED_PHONE,
      subInfo: 'Lun-Sam: 9h-19h'
    },
    {
      icon: FaWhatsapp, // Utilisation de FaWhatsapp
      title: 'WhatsApp Devis',
      info: FORMATTED_PHONE,
      subInfo: 'Réponse rapide via message'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      info: 'Gabon',
      subInfo: 'Port-Gentil'
    },
    {
      icon: Clock,
      title: 'Horaires',
      info: 'Lun-Sam: 9h-19h',
      subInfo: 'Dimanche sur RDV'
    }
  ];

  const eventTypes = [
    'Mariage',
    'Anniversaire',
    'Baptême',
    'Événement Corporatif',
    'Fiançailles',
    'Autre'
  ];

  return (
    <div className="pt-20">
      <section className="relative py-32 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Devis <span className="text-gold-400">WhatsApp</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Remplissez le formulaire et envoyez-nous votre demande directement sur WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          {/* Contact Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 mb-20">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-xl text-center border-2 border-gold-400"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="inline-block p-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-4 border-2 border-gold-400 shadow-lg shadow-gold-500/30"
                >
                  {/* Ajustement de la taille pour FaWhatsapp */}
                  {item.icon === FaWhatsapp ? (
                    <FaWhatsapp size={24} className="text-white" />
                  ) : (
                    <item.icon className="w-6 h-6 text-white" />
                  )}
                </motion.div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gold-600 font-medium mb-1">
                  {item.info}
                </p>
                <p className="text-gray-500 text-sm">
                  {item.subInfo}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gold-400">
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
                  Demander un <span className="text-gold-500">Devis Rapide</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez ce formulaire et envoyez votre demande instantanément sur **WhatsApp**.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                        placeholder="+241 XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Type d&apos;Événement *
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                        >
                          <option value="">Sélectionnez...</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Date de l&apos;Événement
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all"
                        />
                      </div>
                  </div>


                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Décrivez votre Projet *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all resize-none"
                      placeholder="Parlez-nous de votre événement, vos souhaits, votre budget estimé..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    // Style du bouton WhatsApp
                    className="w-full text-lg py-4 flex items-center justify-center space-x-3 
                      bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
                  >
                    <FaWhatsapp size={24} className="text-white" />
                    <span>Envoyer la Demande sur WhatsApp</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Section droite maintenue avec Phone/Urgent mis à jour */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Block "Pourquoi Nous Contacter ?" */}
              <div className="bg-gradient-to-br from-cream-100 to-cream-200 p-6 rounded-2xl border-2 border-gold-400">
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Pourquoi Nous <span className="text-gold-600">Contacter ?</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    'Devis gratuit et sans engagement',
                    'Réponse ultra-rapide par WhatsApp', 
                    'Conseils personnalisés',
                    'Visite de nos showrooms',
                    'Portfolio de réalisations'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Block Horaires */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gold-400">
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Nos <span className="text-gold-600">Horaires</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-semibold text-primary-900">9h - 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-semibold text-primary-900">9h - 17h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="font-semibold text-gold-600">Sur RDV</span>
                  </div>
                </div>
              </div>

              {/* Block Urgent Call */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 p-6 rounded-2xl text-white border-2 border-gold-400 shadow-xl">
                <h3 className="text-xl font-bold mb-2">
                  Événement <span className="text-gold-400">Urgent ?</span>
                </h3>
                <p className="text-gray-300 mb-4">
                  Appelez-nous directement pour une réponse immédiate
                </p>
                
                <a 
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center space-x-2 bg-gold-500 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors border-2 border-gold-400"
                >
                  <Phone className="w-5 h-5" />
                  <span>{FORMATTED_PHONE}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Carte/Showroom */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Venez Nous <span className="text-gold-500">Rendre Visite</span>
            </h2>
            <p className="section-subtitle">
              Notre showroom est ouvert pour découvrir nos créations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center border-4 border-gold-400"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gold-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg font-semibold">
                123 Avenue de la Fête, Ville, Pays
              </p>
              <p className="text-gray-500 mt-2">
                [Intégrer ici votre carte Google Maps]
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;