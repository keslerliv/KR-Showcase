import { motion } from 'framer-motion';
import { socials } from './socialContext';

import styles from './style.module.scss';

export default function Socials() {
  const socialContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const socialItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={socialContainer}
      initial="hidden"
      animate="visible"
      className={styles.socialsList}
    >
      <div className={styles.social}>
        {socials.map((social, index) => (
          <motion.a
            key={index}
            variants={socialItem}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href={social.url}
            target='_blank'
            title={`Link to my ${social.title}`}>
            <img src={social.img} key={index} alt="Enviar email" title='Enviar email' />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}