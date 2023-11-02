import ItemsList from '../ItemsList';
import SimpleTitle from '../SimpleTitle';
import { backend, frontend } from './skillsContext';

import styles from './style.module.scss';

export default function Skills() {
  return (
    <section id='skills' className={styles.wrapper}>
      <div className={styles.container}>
        <SimpleTitle title='My skills' />
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          Officia necessitatibus nesciunt minus, dolorum sint! Totam, officia!
        </p>
        <ItemsList title='Frontend' items={frontend} />
        <ItemsList title='Backend' items={backend} />
      </div>
    </section>
  );
}