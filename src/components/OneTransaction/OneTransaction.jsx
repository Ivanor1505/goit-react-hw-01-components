import PropTypes from 'prop-types';
import { TableItem, TableCell } from './OneTransactin.styled'

export const OneTransaction = ({ type, amount, currency }) => (
    
   <TableItem>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableItem>
     
);

OneTransaction.propTypes = {
    type: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.string
};