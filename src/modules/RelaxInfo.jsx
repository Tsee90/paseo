import relaxImg from '../assets/relax.jpg';
import styles from '../styles/RelaxInfo.module.css';

const RelaxInfo = ({ isVisible }) => {
  return (
    <div
      className={`${styles.relaxInfoContainer}  ${
        isVisible ? styles.visible : ''
      }`}
    >
      <img src={relaxImg} alt="Friends" className={`${styles.relaxImg}`} />

      <div
        className={`${styles.relaxText} ${
          isVisible ? styles.fadeIn : styles.hidden
        } ${isVisible ? styles.delay2 : ''}`}
      >
        Relax
      </div>

      <div
        className={`${styles.enjoyText} ${
          isVisible ? styles.fadeIn : styles.hidden
        } ${isVisible ? styles.delay : ''}`}
      >
        And enjoy the view.
      </div>
    </div>
  );
};

export default RelaxInfo;
