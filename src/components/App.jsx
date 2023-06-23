import user from '../db/user.json';
import data from '../db/data.json';
import friends from '../db/friends.json';

import { Profile } from './01Profile/Profile';
import { Statistics } from './02Statistics/Statistics';
import { FriendList } from './03FriendList/FriendList';

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
    </div>
  );
};
