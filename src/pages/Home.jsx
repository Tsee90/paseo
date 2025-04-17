import styles from '../styles/Home.module.css';
import BookButton from '../modules/BookButton';
import DiveInfo from '../modules/DiveInfo';
import ClimbInfo from '../modules/ClimbInfo';
import RelaxInfo from '../modules/RelaxInfo';
import { useEffect, useState, useRef } from 'react';
import paseoView from '../assets/paseoview.jpg';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [info1Visible, setInfo1Visible] = useState(false);
  const [info2Visible, setInfo2Visible] = useState(false);
  const [info3Visible, setInfo3Visible] = useState(false);
  const [info4Visible, setInfo4Visible] = useState(false);
  const info1Ref = useRef(null);
  const info2Ref = useRef(null);
  const info3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.6;
      setVisible(window.scrollY > triggerHeight);
      setInfo1Visible(window.scrollY > 1);
      setInfo2Visible(window.scrollY > window.innerHeight);
      setInfo3Visible(window.scrollY > window.innerHeight * 2);
      setInfo4Visible(
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickToInfo = () => {
    const yOffset = -60;
    const y =
      info1Ref.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <div className={`${styles.homeContainer}`}>
        <div className={`${styles.hero}`}>
          <img
            src={paseoView}
            alt="Paseo Del Mar"
            className={`${styles.heroImg}`}
          />
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
            <div className={`${styles.slogan}`}>Dive</div>
            <span class={`material-symbols-outlined ${styles.downArrow}`}>
              keyboard_arrow_down
            </span>
          </div>
        </div>
        <div ref={info1Ref} className={`${styles.infoContainer1}`}>
          <div
            className={`${styles.diveInfoWrapper} ${
              info1Visible ? styles.show : ''
            }`}
          >
            <DiveInfo></DiveInfo>
          </div>
        </div>
        <div ref={info2Ref} className={`${styles.infoContainer2}`}>
          <div
            className={`${styles.climbInfoWrapper} ${
              info2Visible ? styles.show : ''
            }`}
          >
            <ClimbInfo></ClimbInfo>
          </div>
        </div>
        <div ref={info3Ref} className={`${styles.inforContainer3}`}>
          <div className={`${styles.relaxInfoWrapper} `}>
            <RelaxInfo isVisible={info3Visible}></RelaxInfo>
          </div>
        </div>

        <div
          className={`${styles.floatButtonContainer} ${
            visible ? styles.show : ''
          } ${info4Visible ? styles.atBottom : ''}`}
        >
          <BookButton></BookButton>
        </div>
      </div>
      <div className={`${styles.whyWait}`}>
        <div className={`${styles.whyWaitText}`}>What are you waiting for?</div>
      </div>
    </>
  );
};

export default Home;
