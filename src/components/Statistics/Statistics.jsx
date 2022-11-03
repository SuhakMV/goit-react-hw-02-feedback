import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li className={css.list__item}>
          <p className={css.list__text}>good:</p>
          <span className={css.list__value}>{good}</span>
        </li>
        <li className={css.list__item}>
          <p className={css.list__text}>neutral:</p>
          <span className={css.list__value}>{neutral}</span>
        </li>
        <li className={css.list__item}>
          <p className={css.list__text}>bad:</p>
          <span className={css.list__value}>{bad}</span>
        </li>
        <li className={css.list__item}>
          <p className={css.list__text}>total:</p>
          <span className={css.list__value}>{total}</span>
        </li>
        <li className={css.list__item}>
          <p className={css.list__text}>positive feedback:</p>
          <span className={css.list__value}>{positivePercentage}</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;
