import styles from '../styles/Home.module.css';
import paseoSunset from '../assets/paseosunset.jpg';

const Home = () => {
  return (
    <>
      <div className={`${styles.homeContainer}`}>
        <div className={`${styles.hero}`}>
          <div className={`${styles.slogan}`}>
            <div>The sea awaits...</div>
          </div>
          <div className={`${styles.heroButton}`}>
            <button>Book</button>
          </div>
        </div>
        <div className={`${styles.infoContainer1}`}>Info1</div>
      </div>
    </>
  );
};

export default Home;
