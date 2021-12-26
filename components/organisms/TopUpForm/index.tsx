import Nominal from './nominal';
import PaymentMethod from './payment-method';

export default function TopUpForm() {
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify ID </label>
          <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID" aria-describedby="verifyID" placeholder="Enter your ID" />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          <Nominal id="topup1" gold="125" nominal="Rp 3.250.000" />
          <Nominal id="topup2" gold="225" nominal="Rp 3.250.000" />
          <Nominal id="topup3" gold="350" nominal="Rp 3.250.000" />
          <Nominal id="topup4" gold="550" nominal="Rp 3.250.000" />
          <Nominal id="topup5" gold="750" nominal="Rp 3.250.000" />
          <div className="col-lg-4 col-sm-6"> </div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <PaymentMethod id="transfer" title="Transfer" desc="Worldwide Available" />
            <PaymentMethod id="visa" title="VISA" desc="Credit Card" />
            <div className="col-lg-4 col-sm-6"> </div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank Account Name</label>
        <input type="text" className="form-control rounded-pill text-lg" id="bankAccount" name="bankAccount" aria-describedby="bankAccount" placeholder="Enter your Bank Account Name" />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <a href="/checkout" type="submit" className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</a>
      </div>
    </form>
  )
}
