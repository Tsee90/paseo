import styles from '../styles/BookButton.module.css';

const BookButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(
      'https://www.booking.com/hotel/ph/paseo-del-mar-dive-resort.html',
      '_blank'
    );
  };
  return (
    <button onClick={handleClick} className={`${styles.button}`}>
      <span className={`${styles.buttonText}`}>Book</span>
    </button>
  );
};

export default BookButton;
