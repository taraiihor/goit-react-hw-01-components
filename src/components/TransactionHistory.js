import Transactions from './transaction-history/Transactions';
function TransactionHistory({ items, children }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="container__tabl">Type</th>
          <th className="container__tabl">Amount</th>
          <th className="container__tabl">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transactions
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
