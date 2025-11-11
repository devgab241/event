import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceCard = ({ icon: Icon, title, description, image, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card group cursor-pointer overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="gradient-overlay opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
        
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg border-2 border-gold-400 group-hover:border-gold-500 transition-colors"
        >
          <Icon className="w-6 h-6 text-gold-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent pointer-events-none"
        />
      </div>

      <div className="p-6 bg-white">
        <h3 className="text-2xl font-display font-semibold mb-3 text-primary-900 group-hover:text-gold-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '60px' } : { width: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
          className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 rounded-full shadow-lg shadow-gold-500/50"
        />
      </div>

      <div className="absolute inset-0 border-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none shadow-lg shadow-gold-500/30" />
    </motion.div>
  );
};

export default ServiceCard;