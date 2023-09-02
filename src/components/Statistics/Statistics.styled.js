import styled from 'styled-components';

const StatisticsSection = styled('section')(() => {
  return {
    maxWidth: 320,
    margin: '0 auto',
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#d4d4d4',
  };
});
const StatisticsTitle = styled('h2')(() => {
  return {
    marginBottom: 15,
  };
});

const StatisticsList = styled('ul')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});

export { StatisticsSection, StatisticsTitle, StatisticsList };