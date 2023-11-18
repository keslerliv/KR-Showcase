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
        <SimpleTitle title='Sobre mim' />
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textVariants}
          viewport={{ once: true }}
          className={styles.description}>
          Ola, sou um Desenvolvedor Fullstack apaixonado, destaco principalmente
          minhas habilidades com React, React Native e Django Rest Framework,
          com experiência sólida em micro-frontend e criação de libs.
          Comprometido com BDD e TDD, busco a entrega de código limpo e de
          alta qualidade
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textVariants}
          viewport={{ once: true }}
          className={styles.description}>
          Conto com um histórico de contribuições em projetos significativos,
          vivência com Google Cloud e GA4, além do desenvolvimento de plugins e
          temas para Wordpress. Atualmente, lidero o desenvolvimento de um
          aplicativo de rede social.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={textVariants}
          viewport={{ once: true }}
          className={styles.description}>
          Caracterizado por excelente comunicação, proatividade e produtividade,
          estou constantemente aprimorando minhas habilidades. Almejo ser uma
          referência na área de tecnologia, contribuindo para projetos inovadores e
          inspirando os outros
        </motion.p>
      </div>
    </section>
  );
}