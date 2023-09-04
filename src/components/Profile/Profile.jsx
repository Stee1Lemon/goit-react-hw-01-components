import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Name,
  AdditionalInfo,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled.js';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <ProfileWrap>
        <Description>
          <img src={avatar} alt="User avatar" className="avatar" />
          <Name>{username}</Name>
          <AdditionalInfo>{tag}</AdditionalInfo>
          <AdditionalInfo>{location}</AdditionalInfo>
        </Description>

        <StatsList>
          <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{followers}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{views}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{likes}</StatsQuantity>
          </StatsItem>
        </StatsList>
      </ProfileWrap>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
