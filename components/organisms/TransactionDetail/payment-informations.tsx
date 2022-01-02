import TDinfo from './info';

export default function PaymentInformations() {
  return (
    <div className="payment pt-10 pb-10">
      <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
      <TDinfo title="Your Account Name" desc="Masayoshi Angga Zero" />
      <TDinfo title="Type" desc="Worldwide Transfer" />
      <TDinfo title="Bank Name" desc="Mandiri" />
      <TDinfo title="Bank Account Name" desc="PT Store GG Indonesia" />
      <TDinfo title="Bank Number" desc="1800 - 9090 - 2021" />
    </div>
  )
}
