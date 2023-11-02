import { useEffect, useRef } from "react";
import { motion, useInView } from 'framer-motion';

import styles from './style.module.scss';

export default function TextSection() {
  const firstElement = useRef(null)
  const secondElement = useRef(null)

  const firstIsView = useInView(firstElement, { once: false, margin: "-50% 0px -20% 0px" })
  const secondIsView = useInView(secondElement, { once: false, margin: "-20% 0px -52% 0px" })

  useEffect(() => {
    console.log(firstElement)
  }, [firstIsView, secondIsView])

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.textContent}>
          <motion.div
            className={styles.showText}
            ref={firstElement}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: firstIsView && !secondIsView ? 1 : .2 }}
            transition={{ duration: .3 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae. {' '}
          </motion.div>

          <motion.div
            className={styles.showText}
            ref={secondElement}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: secondIsView ? 1 : .2 }}
            transition={{ duration: .3 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae.
          </motion.div>
        </p>
      </div>
    </section>
  );
}