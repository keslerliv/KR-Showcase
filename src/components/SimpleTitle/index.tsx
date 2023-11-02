import { motion } from 'framer-motion';

import styles from './style.module.scss';

type SimpleTitleProps = {
  title: string;
}

export default function SimpleTitle({ title }: SimpleTitleProps) {
  return (
    <div className={styles.Wrapper}>
      <h2>{title}</h2>
      <motion.div
        initial={{ width: '0px' }}
        whileInView={{ width: '100px' }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: .3, duration: .4 }}
        className={styles.bottomBar} />
    </div>
  );
}