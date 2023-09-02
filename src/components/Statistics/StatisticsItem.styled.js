import styled from 'styled-components';

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

export { StatisticsItemEl, StatisticsLabel };
