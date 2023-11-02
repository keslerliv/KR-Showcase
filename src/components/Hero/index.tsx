import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import RobotAnimation from '../../assets/animations/globe.json';
import Socials from '../Socials';

import styles from './style.module.scss';

export default function Hero() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: .8,
        delayChildren: 1.1,
        staggerChildren: 0.2
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
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.smallText}>
            KESLER<br /> RODRIGUES
          </motion.h1>

          <Socials />

          <motion.ul
            variants={container}
            className={styles.title}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={item}>MY</motion.li>
            <motion.li variants={item}><strong>FULLSTACK</strong></motion.li>
            <motion.li variants={item}>DEVELOPER</motion.li>
            <motion.li variants={item}><strong>JOURNEY</strong></motion.li>
            <motion.li variants={item}>AND MY</motion.li>
            <motion.li variants={item}><strong>SHOWCASE</strong></motion.li>
          </motion.ul>
        </div>
        <div className={styles.animationWrapper}>
          <Lottie className={styles.animation} animationData={RobotAnimation} />
        </div>
      </div>
    </section>
  );
}