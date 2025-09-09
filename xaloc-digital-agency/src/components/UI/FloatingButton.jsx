import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Phone, MessageCircle, Mail, Star } from 'lucide-react';
import ReviewModal from './ReviewModal';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const options = [
    {
      label: 'Call Us',
      icon: Phone,
      href: 'tel:+918590940911',
      target: '_self',
      color: 'bg-blue-500 hover:bg-blue-600',
      shadowColor: 'shadow-blue-500/30'
    },
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/message/F6SEAX63WOZCJ1',
      target: '_blank',
      color: 'bg-green-500 hover:bg-green-600',
      shadowColor: 'shadow-green-500/30'
    },
    {
      label: 'Email',
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=xalocmediaparters@gmail.com&su=Let%27s%20start&body=Hi%20Xaloc%20Team,',
      target: '_blank',
      color: 'bg-red-500 hover:bg-red-600',
      shadowColor: 'shadow-red-500/30'
    },
    {
      label: 'Review Us',
      icon: Star,
      onClick: () => {
        setIsReviewOpen(true);
        setIsOpen(false);
      },
      color: 'bg-yellow-500 hover:bg-yellow-600',
      shadowColor: 'shadow-yellow-500/30'
    }
  ];

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeReviewModal = () => setIsReviewOpen(false);

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      x: 20,
      scale: 0.3,
      rotate: -90,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    idle: {
      scale: 1,
      rotate: 0,
      boxShadow: "0 4px 20px rgba(234, 88, 12, 0.3)"
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 8px 30px rgba(234, 88, 12, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      rotate: -5
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.3, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Floating pulse ring */}
        <motion.div
          variants={pulseVariants}
          animate={!isOpen ? "pulse" : ""}
          className="absolute inset-0 bg-orange-600 rounded-full"
          style={{ zIndex: -1 }}
        />
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-end space-y-3 mb-6"
            >
              {options.map((option, index) => (
                <motion.button
                  key={option.label}
                  onClick={option.onClick}
                  href={option.href}
                  target={option.target}
                  rel={option.target === '_blank' ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    x: -5,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                  className={`flex items-center space-x-3 ${option.color} text-white px-5 py-3 rounded-full shadow-lg ${option.shadowColor} backdrop-blur-sm border border-white/20 group relative overflow-hidden`}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%', skewX: -15 }}
                    whileHover={{
                      x: '200%',
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <option.icon size={18} />
                  </motion.div>
                  <span className="text-sm font-medium whitespace-nowrap group-hover:text-white transition-colors duration-200">
                    {option.label}
                  </span>
                  
                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-white/40 rounded-full"
                    animate={{
                      y: [-2, -8, -2],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleOpen}
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="tap"
          className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-5 rounded-full relative overflow-hidden group"
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full"
            animate={{
              scale: isOpen ? 1 : [1, 1.1, 1],
              opacity: isOpen ? 1 : [0.8, 0.6, 0.8]
            }}
            transition={{
              duration: isOpen ? 0 : 3,
              repeat: isOpen ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Rotating border */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.3), transparent)'
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            animate={{ 
              rotate: isOpen ? 135 : 0,
              scale: isOpen ? 0.9 : 1
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="relative z-10"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Click ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{
              scale: 2,
              opacity: [0, 0.3, 0],
              transition: { duration: 0.4 }
            }}
          />
        </motion.button>
      </div>
      <ReviewModal isOpen={isReviewOpen} onClose={closeReviewModal} />
    </>
  );
};

export default FloatingButton;
