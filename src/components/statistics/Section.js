import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Section = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
};

Section.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default Section;
