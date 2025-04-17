import styles from '../styles/Home.module.css';
import BookButton from '../modules/BookButton';
import { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const infoRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.6;
      setVisible(window.scrollY > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickToInfo = () => {
    const yOffset = -60; // height of your fixed nav
    const y =
      infoRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <div className={`${styles.homeContainer}`}>
        <div className={`${styles.hero}`}>
          <div className={`${styles.slogan}`}>
            <div>The sea awaits...</div>
          </div>
          <div className={`${styles.heroButtonContainer}`}>
            <BookButton></BookButton>
          </div>
          <div
            onClick={handleClickToInfo}
            className={`${styles.downArrowWrapper}`}
          >
            <span class={`material-symbols-outlined ${styles.downArrow}`}>
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div ref={infoRef} className={`${styles.infoContainer1}`}>
          Info1
        </div>
        <div
          className={`${styles.floatButtonContainer} ${
            visible ? styles.show : ''
          }`}
        >
          <BookButton></BookButton>
        </div>
      </div>
    </>
  );
};

export default Home;
