import ItemsList from '../ItemsList';
import SimpleTitle from '../SimpleTitle';
import { backend, frontend } from './skillsContext';

import styles from './style.module.scss';

export default function Skills() {
  return (
    <section id='skills' className={styles.wrapper}>
      <div className={styles.container}>
        <SimpleTitle title='Habilidades' />
        <p className={styles.description}>
          Minhas principais habilidades.
        </p>
        <ItemsList title='Frontend' items={frontend} />
        <ItemsList title='Backend' items={backend} />
      </div>
    </section>
  );
}