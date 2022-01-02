import TDinfo from './info';

export default function PurchaseDetails() {
  return (
    <div className="purchase pt-30">
      <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
      <TDinfo title="Your Game ID" desc="masayoshizero" />
      <TDinfo title="Order ID" desc="GG001" />
      <TDinfo title="Item" desc="250 Diamonds" />
      <TDinfo title="Price" desc="Rp 42.280.500" />
      <TDinfo title="Tax (10%)" desc="Rp 4.228.000" />
      <TDinfo title="Total" desc="Rp 55.000.600" colorClass="color-palette-4" />
    </div>
  )
}
