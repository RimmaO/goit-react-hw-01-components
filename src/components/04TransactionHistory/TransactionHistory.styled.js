import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 7px;
  width: 240px;
  border-radius: 5px;
  background-color: white;
  text-align: center;
  border-collapse: collapse;
`;

export const Column = styled.tr`
  &:nth-of-type(odd) {
    background-color: gainsboro;
  }
`;

export const ColumnItem = styled.td`
  font-size: 15px;
  padding: 5px;
  border: 1px solid hsl(0, 10%, 96%);
`;
export const ColumnItemMini = styled(ColumnItem)`
  font-size: 10px;
`;
