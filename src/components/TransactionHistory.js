import Transactions from '../components/transaction-history/transactions';
function TransactionHistory({ items, children }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
    // <tbody>
    //
    // </tbody>
  );
}

export default TransactionHistory;

// function PaintingList({ items }) {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <Painting
//             url={item.url}
//             title={item.title}
//             authorUrl={item.author.url}
//             price={item.price}
//             authorTag={item.author.tag}
//             quantity={item.quantity}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
