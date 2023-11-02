import { motion } from 'framer-motion';
import SimpleTitle from '../SimpleTitle';

import styles from './style.module.scss';

export default function About() {
  const textVariants = {
    offscreen: {
      opacity: 0,
      x: -100
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 3
      }
    }
  };

  return (
    <section id='about' className={styles.wrapper}>
      <div className={styles.container}>
        <SimpleTitle title='About me' />
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textVariants}
          viewport={{ once: true }}
          className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae, unde asperiores reprehenderit enim dolores consequatur veritatis quis neque nostrum. Voluptatem eum commodi atque est facilis ipsum ex molestias amet.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textVariants}
          viewport={{ once: true }}
          className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis autem corrupti nemo modi ullam voluptates vel pariatur, explicabo ad.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textVariants}
          viewport={{ once: true }}
          className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime fugit laborum nobis, distinctio nemo a ipsa cum quidem similique officia veritatis, alias consectetur neque dolor ex at nam dignissimos impedit.
        </motion.p>
      </div>
    </section>
  );
}