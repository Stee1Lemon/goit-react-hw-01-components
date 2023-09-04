import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container } from './Container.styled';
import userData from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </Container>
      <Container>
        <Statistics title={'Upload stats'} stats={data} />
      </Container>
      <Container>
        <Friends friends={friends} />
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};
