import styles from '../developement/DevHeading.module.css';

const ScrollableButton = ({scrollAmount = 350}) => {
  const handleScroll = () => {
    console.log('I am just scrolling on the page...')
    window.scrollTo({ top: scrollAmount, behavior: 'smooth' });
  }

  return <button className={styles.btn} onClick={handleScroll}>Explore More</button>
};

export default ScrollableButton;
