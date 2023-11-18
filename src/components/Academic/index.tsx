import { motion } from 'framer-motion';
import SimpleTitle from '../SimpleTitle';
import { cards } from './cardsContext';

import styles from './style.module.scss';

export default function Academic() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .3,
        staggerChildren: .3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id='academic' className={styles.wrapper}>
      <div className={styles.container}>
        <SimpleTitle title='Formação' />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.cards}>
          {cards.map((card, index) => (
            <motion.div
              variants={item}
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.02 }}>
              <div className={styles.header}>
                <p className={styles.name}><strong>{card.title}</strong></p>
                <p className={styles.date}>{card.date}</p>
              </div>
              <p className={styles.description}>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}