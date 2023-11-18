import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

import styles from './style.module.scss';

export default function TextSection() {
  const firstElement = useRef(null)
  const secondElement = useRef(null)

  const firstIsView = useInView(firstElement, { once: false, margin: "-50% 0px -20% 0px" })
  const secondIsView = useInView(secondElement, { once: false, margin: "-20% 0px -52% 0px" })

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <motion.p
            className={styles.showText}
            ref={firstElement}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: firstIsView && !secondIsView ? 1 : .2 }}
            transition={{ duration: .3 }}>
            Transformando ideias em código, criando soluções que impulsionam o futuro da tecnologia.
          </motion.p>

          <motion.p
            className={styles.showText}
            ref={secondElement}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: secondIsView ? 1 : .2 }}
            transition={{ duration: .3 }}>
            {' '}Desenvolvimento é minha paixão, minha missão e propósito.
          </motion.p>
        </div>
      </div>
    </section>
  );
}