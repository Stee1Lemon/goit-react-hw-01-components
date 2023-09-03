import styled from 'styled-components';

export const TableTransactions = styled('table')(() => {
  return {
    minWidth: 200,
    border: 'solid 1px #DDEEEE',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    font: 'normal 16px Arial, sans-serif',
    '& thead th': {
      backgroundColor: '#DDEFEF',
      border: 'solid 1px #DDEEEE',
      color: '#336B6B',
      padding: 10,
      textAlign: 'left',
      textShadow: '1px 1px 1px #fff',
    },
    '& tbody td': {
      border: 'solid 1px #DDEEEE',
      color: '#333',
      padding: 10,
      textShadow: '1px 1px 1px #fff',
    },
  };
});
