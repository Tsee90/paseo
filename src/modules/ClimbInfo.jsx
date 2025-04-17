import styles from '../styles/ClimbInfo.module.css';
import hacienda from '../assets/hacienda.jpg';

const ClimbInfo = () => {
  return (
    <div className={`${styles.climbInfoContainer}`}>
      <img src={hacienda} alt="Hacienda" className={`${styles.haciendaImg}`} />
      <div className={`${styles.title}`}>Conquer the Peaks</div>
    </div>
  );
};

export default ClimbInfo;
