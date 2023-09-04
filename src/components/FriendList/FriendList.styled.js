import styled from 'styled-components';

export const FriendsList = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
  };
});

