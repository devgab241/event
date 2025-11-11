import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
// Import du véritable logo WhatsApp depuis react-icons/fa
import { FaWhatsapp } from 'react-icons/fa'; 

const Footer = () => {
  // Déclaration des constantes pour le numéro et le message WhatsApp
  const WHATSAPP_NUMBER_FULL = '21655781043';
  const FORMATTED_PHONE = '+216 55 781 043';
  const WHATSAPP_MESSAGE = encodeURIComponent("Bonjour EventiDecor, j'aimerais en savoir plus sur vos services de décoration.");
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_FULL}?text=${WHATSAPP_MESSAGE}`;


  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 border-t-4 border-gold-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/logo.png" 
                alt="EventiDecor" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-display font-bold">
                Eventi<span className="text-gold-400">Decor</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Transformez vos événements en moments inoubliables avec nos services de décoration professionnelle.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Galerie
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2 text-gold-400">•</span> Décoration de Véhicules
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gold-400">•</span> Salles de Fêtes
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gold-400">•</span> Mariages
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gold-400">•</span> Événements Corporatifs
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gold-400">•</span> Anniversaires
              </li>
            </ul>
            </div>

            <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Contact</h3>
            <div className="space-y-3">
              {/* Adresse : Port-Gentil, Gabon */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Avenue Principale<br />
                  Port-Gentil, Gabon
                </span>
              </div>

              {/* Téléphone pour appel */}
              <a href={`tel:${WHATSAPP_NUMBER_FULL}`} className="flex items-center space-x-3 hover:text-gold-400 transition-colors">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">{FORMATTED_PHONE}</span>
              </a>

              {/* Véritable logo WhatsApp */}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-gold-400 transition-colors">
                <FaWhatsapp size={20} className="text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">WhatsApp (Devis Rapide)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} EventiDecor. Tous droits réservés.
          </p>
          <p className="text-sm">
            Créé avec <span className="text-gold-400">❤</span> pour sublimer vos événements
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;