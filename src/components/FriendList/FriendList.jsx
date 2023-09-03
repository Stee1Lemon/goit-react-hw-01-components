import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendsList } from './FriendList.styled';

export const Friends = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </FriendsList>
  );
};

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem className="item">
      <FriendStatus isonline={`${isOnline}`}></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
};

FriendsList.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isonline: PropTypes.bool,
};
