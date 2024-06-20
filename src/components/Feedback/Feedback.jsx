import css from './Feedback.module.css';

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
