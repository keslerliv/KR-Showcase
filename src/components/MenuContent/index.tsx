import { motion } from 'framer-motion';

import styles from './style.module.scss';
import { options } from './menuContext';

interface MenuContentProps {
  status: boolean;
  closeModal: () => void
}

export default function MenuContent({ status, closeModal }: MenuContentProps) {
  return (
    <>
      {status && (
        <motion.div
          onClick={() => null}
          className={styles.menuContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul>
            {options.map((option, index) => (
              <motion.li
                whileHover={{ scale: 1.15, fontWeight: 700 }}
                onClick={closeModal}
                key={index}>
                <a href={option.url}>{option.name}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>)
      }
    </>
  );
}