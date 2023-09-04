import PropTypes from 'prop-types';
import { FriendItem, FriendStatus } from './Friend.styled';

export const Friend = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItem key={id}>
      <FriendStatus $isOnline={isOnline}></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
