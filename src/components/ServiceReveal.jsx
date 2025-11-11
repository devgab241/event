import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceReveal = ({ imageSrc, title, description, effectType = 'curtain', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderEffect = () => {
    switch(effectType) {
      case 'curtain':
        return (
          <div ref={ref} className="relative w-full h-96 overflow-hidden rounded-2xl border-4 border-gold-400 shadow-2xl">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            
            {/* Rideau gauche */}
            <motion.div
              initial={{ x: 0 }}
              animate={isInView ? { x: '-100%' } : { x: 0 }}
              transition={{ duration: 1.2, delay: delay, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-primary-900 to-primary-800 border-r-4 border-gold-500"
              style={{ left: 0 }}
            >
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(212, 175, 55, 0.3) 2px, rgba(212, 175, 55, 0.3) 4px)'
              }} />
            </motion.div>

            {/* Rideau droit */}
            <motion.div
              initial={{ x: 0 }}
              animate={isInView ? { x: '100%' } : { x: 0 }}
              transition={{ duration: 1.2, delay: delay, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-l from-primary-900 to-primary-800 border-l-4 border-gold-500"
              style={{ right: 0, left: 'auto' }}
            >
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(212, 175, 55, 0.3) 2px, rgba(212, 175, 55, 0.3) 4px)'
              }} />
            </motion.div>

            {/* Particules dorées */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? {
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, -100],
                  x: [0, (Math.random() - 0.5) * 100]
                } : {}}
                transition={{
                  duration: 1.5,
                  delay: delay + 1 + (i * 0.1),
                }}
                className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full bg-gold-400"
              />
            ))}
          </div>
        );

      case 'zoom':
        return (
          <div ref={ref} className="relative w-full h-96 overflow-hidden rounded-2xl border-4 border-gold-400 shadow-2xl">
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0, opacity: 0, rotate: -10 }}
              transition={{ duration: 1, delay: delay, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Cercles dorés qui s'étendent */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={isInView ? {
                  scale: [0, 3, 4],
                  opacity: [0.8, 0.3, 0]
                } : {}}
                transition={{
                  duration: 1.5,
                  delay: delay + (i * 0.2),
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-gold-400"
              />
            ))}
          </div>
        );

      case 'fade':
        return (
          <div ref={ref} className="relative w-full h-96 overflow-hidden rounded-2xl border-4 border-gold-400 shadow-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, delay: delay }}
              className="w-full h-full"
            >
              <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Voile doré qui se lève */}
            <motion.div
              initial={{ y: 0 }}
              animate={isInView ? { y: '-100%' } : { y: 0 }}
              transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-b from-gold-400/80 to-gold-600/80"
            />

            {/* Paillettes */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? {
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  y: [0, -150],
                  x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400]
                } : {}}
                transition={{
                  duration: 2,
                  delay: delay + 0.8 + (i * 0.1),
                }}
                className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-gold-300"
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {renderEffect()}
      
      {/* Texte qui apparaît après */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: delay + 1.2 }}
        className="text-center"
      >
        <h3 className="text-3xl font-display font-bold text-primary-900 mb-4">
          {title}
        </h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default ServiceReveal;