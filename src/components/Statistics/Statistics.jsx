import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
} from './Statistics.styled';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <>
      <StatisticsSection>
        <StatisticsTitle>{title}</StatisticsTitle>

        <StatisticsList>
          {stats.map(stat => {
            return (
              <StatisticsItem
                key={stat.id}
                label={stat.label}
                percentage={stat.percentage}
              />
            );
          })}
        </StatisticsList>
      </StatisticsSection>
    </>
  );
};
