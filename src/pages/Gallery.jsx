import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ZoomIn, Heart, Share2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, src: '/images/car1.jpg', category: 'vehicles', title: 'Véhicule Mariage Luxe', likes: 145 },
    { id: 2, src: '/images/car2.jpg', category: 'vehicles', title: 'Décoration Florale Auto', likes: 132 },
    { id: 3, src: '/images/car3.jpg', category: 'vehicles', title: 'Voiture Cortège', likes: 98 },
    { id: 4, src: '/images/salle1.jpg', category: 'halls', title: 'Salle de Réception', likes: 201 },
    { id: 5, src: '/images/salle2.jpg', category: 'halls', title: 'Décor Élégant', likes: 187 },
    { id: 6, src: '/images/decoration.jpg', category: 'weddings', title: 'Mariage Romantique', likes: 256 },
    { id: 7, src: '/images/car1.jpg', category: 'weddings', title: 'Cérémonie Champêtre', likes: 178 },
    { id: 8, src: '/images/salle1.jpg', category: 'halls', title: 'Banquet Royal', likes: 165 },
    { id: 9, src: '/images/car2.jpg', category: 'vehicles', title: 'Limousine Décorée', likes: 143 }
  ];

  const categories = [
    { value: 'all', label: 'Tout Voir' },
    { value: 'vehicles', label: 'Véhicules' },
    { value: 'halls', label: 'Salles' },
    { value: 'weddings', label: 'Mariages' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 bg-primary-900">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
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
              Notre <span className="text-gold-400">Galerie</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos plus belles créations et laissez-vous inspirer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gold-300 sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === cat.value
                    ? 'bg-gold-500 text-primary-900 shadow-lg shadow-gold-500/30 border-2 border-gold-600'
                    : 'bg-cream-100 text-gray-700 hover:bg-cream-200 border-2 border-gray-300'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white border-2 border-gray-200 hover:border-gold-400 transition-all"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay noir/or */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {image.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-5 h-5 text-gold-400 fill-gold-400" />
                          <span className="text-white font-semibold">{image.likes}</span>
                        </div>
                        <ZoomIn className="w-6 h-6 text-gold-400" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge doré */}
                  <div className="absolute top-4 left-4 bg-gold-500 text-primary-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg border-2 border-gold-400">
                    {categories.find(c => c.value === image.category)?.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-primary-900/98 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors z-10 bg-primary-800 rounded-full p-2 border-2 border-gold-400"
          >
            <X size={40} />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl border-4 border-gold-400"
            />
            
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                {selectedImage.title}
              </h3>
              <div className="flex items-center justify-center space-x-6">
                <button className="flex items-center space-x-2 text-white hover:text-gold-400 transition-colors bg-primary-800 px-6 py-3 rounded-full border-2 border-gold-400">
                  <Heart className="w-6 h-6" />
                  <span className="text-lg font-semibold">{selectedImage.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-white hover:text-gold-400 transition-colors bg-primary-800 px-6 py-3 rounded-full border-2 border-gold-400">
                  <Share2 className="w-6 h-6" />
                  <span className="text-lg font-semibold">Partager</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Événements' },
              { number: '1000+', label: 'Clients Satisfaits' },
              { number: '50+', label: 'Décorations Uniques' },
              { number: '10+', label: 'Années d\'Expérience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-5xl md:text-6xl font-bold text-gold-400 mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;