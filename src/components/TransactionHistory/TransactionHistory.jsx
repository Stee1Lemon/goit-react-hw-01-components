import { Container, TableTransactions } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransactions>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(transaction => {
            return (
              <TransactionItem
                key={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            );
          })}
        </tbody>
      </TableTransactions>
  );
};

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
