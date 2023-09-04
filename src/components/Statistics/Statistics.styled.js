import styled from 'styled-components';

const StatisticsSection = styled('div')(() => {
  return {
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

const StatisticsItemEl = styled('li')(() => {
  return {
    padding: 15,
    color: '#fff',
    backgroundColor: setRandomColor(),
  };
});

function setRandomColor() {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
}

const StatisticsLabel = styled('span')(() => {
  return {
    display: 'block',
    fontSize: 12,
  };
});

export {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItemEl,
  StatisticsLabel,
};
