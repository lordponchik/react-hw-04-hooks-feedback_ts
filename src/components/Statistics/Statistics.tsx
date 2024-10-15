interface Props {
  goodFeedback: number;
  neutralFeedback: number;
  badFeedback: number;
  countTotalFeedback: number;
  countPositiveFeedbackPercentage: number;
}

export default function Statistics({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}: Props) {
  return (
    <div>
      <p>Good: {goodFeedback}</p>
      <p>Neutral: {neutralFeedback}</p>
      <p>Bad: {badFeedback}</p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
    </div>
  );
}
