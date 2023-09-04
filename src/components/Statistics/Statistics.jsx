import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItemEl,
  StatisticsLabel,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatisticsSection>
        {title && <StatisticsTitle>{title}</StatisticsTitle>}

        <StatisticsList>
          {stats.map(({ id, label, percentage }) => {
            return (
              <StatisticsItemEl key={id}>
                <StatisticsLabel>{label}</StatisticsLabel>
                <span className="percentage">{percentage}%</span>
              </StatisticsItemEl>
            );
          })}
        </StatisticsList>
      </StatisticsSection>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
