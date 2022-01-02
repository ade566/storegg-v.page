import BtnFilterTransactions from './button-filter';

export default function FilterTransactions() {
  return (
    <div id="list_status_title">
      <BtnFilterTransactions title="All Trx" active />
      <BtnFilterTransactions title="Success" />
      <BtnFilterTransactions title="Pending" />
      <BtnFilterTransactions title="Failed" />
    </div>
  )
}
