import { ReactElement, useState } from "react";
import Lottie from 'lottie-react';
import RobotAnimation from '../../assets/animations/cube.json';

import Socials from "../../components/Socials";
import MenuContent from "../../components/MenuContent";
import MenuButton from "../../components/MenuButton";

import styles from './style.module.scss';

interface DefaultTemplateProps {
  children: ReactElement;
}

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  const [isOpen, setOpen] = useState(false);

  const openMenuHandle = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <header className={styles.header}>
        <MenuButton
          isOpen={isOpen}
          onClick={openMenuHandle}
        />
        <MenuContent
          status={isOpen}
          closeModal={() => setOpen(false)} />
      </header>

      {children}

      <footer className={styles.footer}>
        <Lottie
          className={styles.animation}
          animationData={RobotAnimation} />
        <div className={styles.container}>
          <h2 className={styles.title}>
            Feel free to connect on social media.
          </h2>
          <Socials />
          <p className={styles.bottomText}>
            Developed by <a href="https://www.keslerrodrigues.com.br/" target="_blank"><strong>Kesler Rodrigues</strong></a>
          </p>
        </div>
      </footer>
    </>
  );
}