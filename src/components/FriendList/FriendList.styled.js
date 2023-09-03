import styled from 'styled-components';

export const FriendsList = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
  };
});

export const FriendItem = styled('li')(() => {
  return {
    minWidth: 200,
    display: 'flex',
    gap: 20,
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#faf2f3',
    boxShadow:
      '0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08)',
    borderRadius: 8,
  };
});

export const FriendStatus = styled('span')(({ isonline }) => {
  return {
    display: 'block',
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: isonline === 'true' ? 'green' : 'red',
  };
});
