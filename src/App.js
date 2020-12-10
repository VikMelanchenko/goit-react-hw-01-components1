import React from 'react';

import Profile from './components/Profile/Profile';
import userData from './data/user.json';
import statsData from './data/statistic.json';
import Statictics from './components/Statistics/Statistics';
import friends from './data/friends.json';
import FriendsList from './components/FriendList/FriendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/Transactions/Transactions';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statictics title="Upload stats" stats={statsData} />;
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
