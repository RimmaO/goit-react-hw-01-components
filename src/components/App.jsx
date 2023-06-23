import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './01Profile/Profile';
import { Statistics } from './02Statistics/Statistics';
import { FriendList } from './03FriendList/FriendList';
import { TransactionHistory } from './04TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      {/* <Statistics stats={data} /> коли НЕ прилітає з бекенду заголовок */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
