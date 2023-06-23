import { FriendStatus, Item } from './FriendListItem.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item className="item" key={id}>
      <FriendStatus status={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};
