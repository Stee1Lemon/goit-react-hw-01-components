import styled from 'styled-components';

const ProfileWrap = styled('div')(() => {
  return {
    maxWidth: 270,
    textAlign: 'center',
    backgroundColor: '#bfd8ff',
    padding: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow:
      '0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08)',
    borderRadius: 8,
  };
});

const Description = styled('div')(() => {
  return {
    width: '50%',
  };
});

const Name = styled('p')(() => {
  return {
    fontSize: 20,
    fontWeight: 700,
    margin: '4 0 8',
  };
});

const AdditionalInfo = styled('p')(() => {
  return {
    fontSize: 14,
    color: '#808080',
    marginBottom: 8,
  };
});

const StatsList = styled('ul')(() => {
  return {
    display: 'flex',
    gap: 15,
    backgroundColor: '#f0f6ff',
    padding: 20,
  };
});

const StatsItem = styled('li')(() => {
  return {
  };
});

const StatsLabel = styled('span')(() => {
  return {
    display: 'block',
    fontSize: 14,
    marginBottom: 8,
    color: '#808080',
  };
});

const StatsQuantity = styled('span')(() => {
  return { display: 'block', fontSize: 16, fontWeight: 600 };
});

export {
  ProfileWrap,
  Description,
  Name,
  AdditionalInfo,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
};
