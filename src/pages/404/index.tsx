import DefaultTemplate from '../../templates/Default';

import styles from './style.module.scss';

export default function Page404() {
  return (
    <DefaultTemplate>
      <div className={styles.notFound}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </DefaultTemplate>
  );
}