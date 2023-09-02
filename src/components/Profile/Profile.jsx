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
  followers,
  views,
  likes,
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
