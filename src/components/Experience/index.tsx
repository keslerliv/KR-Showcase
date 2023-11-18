import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import SimpleTitle from '../SimpleTitle';
import { cards } from './cardsContext';

import styles from './style.module.scss';

export default function Experience() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .3,
        staggerChildren: 0.4
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
    <section id='experience' className={styles.wrapper}>
      <div className={styles.container}>
        <SimpleTitle title='Experiência' />

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
              whileHover={{ scale: 1.04 }}
              transition={{ duration: .3 }}>
              <div className={styles.flag}></div>
              <span>0{index + 1}</span>
              <div className={styles.images}>
                {card.images.map((image, index) => (
                  <div key={index}>
                    <motion.div
                      data-tooltip-id={`exp-img-${image.id}`}
                      className={styles.imgWrapper}
                      whileHover={{ scale: 1.2 }}>
                      <img
                        key={image.id}
                        src={image.img}
                        alt={image.title}
                        title={image.title} />
                    </motion.div>
                    <Tooltip
                      id={`exp-img-${image.id}`}
                      place="bottom"
                      content={image.title} />
                  </div>
                ))}
              </div>
              <div className={styles.title}>
                <p>{card.title}</p>
                <p>{card.date}</p>
              </div>
              <p className={styles.subTitle}>{card.subTitle}</p>
              <p className={styles.description}>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}