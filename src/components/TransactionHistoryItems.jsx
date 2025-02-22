import css from "./TransactionHistoryItems.module.css";
export default function TransactionHistoryItem({
  transactionItem: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </>
  );
}
