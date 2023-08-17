import PropTypes from 'prop-types';

export const OneTransaction = ({ type, amount, currency }) => (
    
   <tr className="item">
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
     
);

OneTransaction.propTypes = {
    type: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.string
};