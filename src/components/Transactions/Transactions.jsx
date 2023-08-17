import { OneTransaction } from 'components/OneTransaction/OneTransaction';
import PropTypes from 'prop-types';

export const Transactions = ({ items }) => (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

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
</table>
);

Transactions.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};