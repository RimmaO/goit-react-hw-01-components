import user from '../db/user.json';
import data from '../db/user.json';

import { Profile } from './01Profile/Profile';
import { Statistics } from './02Statistics/Statistics';

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
    </div>
  );
};
