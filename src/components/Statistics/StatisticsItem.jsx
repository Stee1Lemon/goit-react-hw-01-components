import { StatisticsItemEl, StatisticsLabel } from './StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatisticsItemEl>
      <StatisticsLabel>{label}</StatisticsLabel>
      <span className="percentage">{percentage}%</span>
    </StatisticsItemEl>
  );
};
