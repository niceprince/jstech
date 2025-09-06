import { useRef, useEffect } from 'react';
import styles from './DevHeading.module.css';
import ScrollableButton from '../common/ScrollableButton';

const DevHeading = ({headingBgText, headText, paraText, bgImage}) => {
  const particleContainer = useRef(null);

  useEffect(() => {
    if (!particleContainer.current) return;
    const particlesContainer = particleContainer.current;
    const particleCount = 40;
    const bgText = headingBgText;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const rNum = Math.floor(Math.random() * bgText.length);
      createParticle(bgText[rNum]);
    }

    function createParticle(devText) {
      const particle = document.createElement('div');
      particle.innerHTML = devText;
      particle.className = styles.particle; // ✅ use CSS module class instead of raw string

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    }

    function resetParticle(particle) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';

      return { x: posX, y: posY };
    }

    function animateParticle(particle) {
      const pos = resetParticle(particle);

      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => {
          animateParticle(particle);
        }, duration * 1000);
      }, delay * 1000);
    }
  }, []); // ✅ only run once on mount

  const mouseMoveEffect = (e) => {
    if (!particleContainer.current) return;
    const particlesContainer = particleContainer.current;

    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;

    const particle = document.createElement('div');
    particle.innerHTML = "✨";
    particle.className = styles.particle;

    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${mouseX}%`;
    particle.style.top = `${mouseY}%`;
    particle.style.opacity = '0.6';

    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.style.transition = 'all 2s ease-out';
      particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
      particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
      particle.style.opacity = '0';

      setTimeout(() => {
        particle.remove();
      }, 2000);
    }, 10);

    const spheres = document.querySelectorAll(`.${styles.gradientSphere}`);
    const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

    spheres.forEach((sphere) => {
      // const currentTransform = getComputedStyle(sphere).transform;
      sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  return (
    <div className={styles.devHead} onMouseMove={mouseMoveEffect}>
      <div className={styles.gradientBackground} style={{backgroundImage: bgImage }}>
        <div className={`${styles.gradientSphere} ${styles.sphere1}`}></div>
        <div className={`${styles.gradientSphere} ${styles.sphere2}`}></div>
        <div className={`${styles.gradientSphere} ${styles.sphere3}`}></div>
        <div className={styles.glow}></div>
        <div className={styles.gridOverlay}></div>
        <div className={styles.noiseOverlay} style={{backgroundImage: bgImage }}></div>
        <div className={styles.particlesContainer} ref={particleContainer}></div>
      </div>
      <div className={styles.contentContainer}>
        <h1 className='text-4xl'>{headText}</h1>
        <p>{paraText}</p>
        <ScrollableButton scrollAmount={350} />
      </div>
    </div>
  );
};

export default DevHeading;
