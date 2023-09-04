import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';
import { Friend } from './Friend';

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

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
