import PropTypes from 'prop-types';

import {
  Column,
  ColumnItem,
  ColumnItemMini,
  Table,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <ColumnItem th>
            <b>Type</b>
          </ColumnItem>
          <ColumnItem th>
            <b>Amount</b>
          </ColumnItem>
          <ColumnItem th>
            <b>Currency</b>
          </ColumnItem>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Column tr key={id}>
              <ColumnItemMini td>{type}</ColumnItemMini>
              <ColumnItemMini td>{amount}</ColumnItemMini>
              <ColumnItemMini td>{currency}</ColumnItemMini>
            </Column>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
