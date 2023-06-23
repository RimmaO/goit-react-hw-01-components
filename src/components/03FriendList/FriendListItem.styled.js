import styled from 'styled-components';

export const FriendStatus = styled.span`
  background-color: ${props => (props.status ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const Item = styled.li`
  display: flex;
  padding: 5px;
  border: 2px solid gainsboro;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
  align-items: center;
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
