import CheckoutDetailList from './detail-list';

export default function CheckoutDetail() {
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <CheckoutDetailList p1="Your Game ID" p2="masayoshizero" />
        <CheckoutDetailList p1="Order ID" p2="#GG001" />
        <CheckoutDetailList p1="Item" p2="250 Diamonds" />
        <CheckoutDetailList p1="Price" p2="Rp 42.280.500" />
        <CheckoutDetailList p1="Tax (10%)" p2="Rp 4.228.000" />
        <p className="text-lg color-palette-1 mb-20">
          Total
          <span className="purchase-details color-palette-4">Rp 55.000.600</span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
        <CheckoutDetailList p1="Your Account Name" p2="Masayoshi Angga Zero" />
        <CheckoutDetailList p1="Type" p2="Worldwide Transfer" />
        <CheckoutDetailList p1="Bank Name" p2="Mandiri" />
        <CheckoutDetailList p1="Bank Account Name" p2="PT Store GG Indonesia" />
        <CheckoutDetailList p1="Bank Number" p2="1800 - 9090 - 2021" />
      </div>
    </>
  )
}
