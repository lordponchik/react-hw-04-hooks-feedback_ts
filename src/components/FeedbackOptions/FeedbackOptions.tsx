import s from './FeedbackOptions.module.css';

interface Props {
  goodFeedback: number;
  neutralFeedback: number;
  badFeedback: number;
  onLeaveFeedback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FeedbackOptions({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  onLeaveFeedback,
}: Props) {
  return (
    <ul className={s.feedbacks}>
      <li key="good" className={s.feedback}>
        <button type="button" name="good" onClick={onLeaveFeedback}>
          good
        </button>
      </li>
      <li key="neutral" className={s.feedback}>
        <button type="button" name="neutral" onClick={onLeaveFeedback}>
          neutral
        </button>
      </li>
      <li key="bad" className={s.feedback}>
        <button type="button" name="bad" onClick={onLeaveFeedback}>
          bad
        </button>
      </li>
    </ul>
  );
}
