import { OneTransaction } from 'components/OneTransaction/OneTransaction';
import PropTypes from 'prop-types';
import { TransactionHistory, TableHead, TableCell } from './Transactions.styled'

export const Transactions = ({ items }) => (
    <TransactionHistory>
  <TableHead>
    <tr>
      <TableCell>Type</TableCell>
      <TableCell>Amount</TableCell>
      <TableCell>Currency</TableCell>
    </tr>
  </TableHead>

    <tbody>
        {items.map(item => (
    <OneTransaction
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
    />
      ))}
    </tbody>
</TransactionHistory>
);

Transactions.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};