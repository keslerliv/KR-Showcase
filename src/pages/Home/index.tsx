import About from '../../components/AboutSection';
import Academic from '../../components/Academic';
import Experience from '../../components/Experience';
import Hero from '../../components/Hero';
import { ParallaxContent } from '../../components/MotionText';
import Skills from '../../components/Skills';
import TextSection from '../../components/TextSection';

import DefaultTemplate from '../../templates/Default';

export default function HomePage() {
  return (
    <DefaultTemplate>
      <>
        <Hero />
        <TextSection />
        <Skills />
        <ParallaxContent />
        <About />
        <Experience />
        <Academic />
      </>
    </DefaultTemplate>
  );
}