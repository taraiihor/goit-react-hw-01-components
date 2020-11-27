import Section from '../components/statistics/Section';
import styles from '../components/statistics/Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stats => (
          <Section
            key={stats.id}
            label={stats.label}
            percentage={stats.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
