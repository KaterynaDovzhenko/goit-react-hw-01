import TransactionHistoryItem from "./TransactionHistoryItems";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr className={`${css.box} ${css.header}`}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((transaction) => (
            <tr className={css.box} key={transaction.id}>
              <TransactionHistoryItem transactionItem={transaction} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
