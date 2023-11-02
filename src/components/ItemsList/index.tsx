import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import styles from './style.module.scss';

type ItemsListProps = {
  title: string;
  items: {
    id: number;
    title: string;
    img: string;
  }[]
}

export default function ItemsList({ title, items }: ItemsListProps) {
  const container = {
    offscreen: { opacity: 1, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className={styles.Wrapper}>
      <p>{title}</p>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={container}
        className={styles.ItemsList}>
        {items.map((value) =>
          <>
            <motion.img
              data-tooltip-id={`motion-img-${value.id}`}
              variants={item}
              src={value.img}
              key={value.id}
              alt={value.title}
              title={value.title}
              whileHover={{ scale: 1.2 }}
            />
            <Tooltip
              id={`motion-img-${value.id}`}
              place="bottom"
              content={value.title} />
          </>
        )}
      </motion.div>
    </div>
  );
}