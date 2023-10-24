import Image from 'next/image'
import Link from 'next/link'
import CheckoutDetail from '../components/organisms/Checkout/detail'
import CheckoutItem from '../components/organisms/Checkout/item'

export default function Checkout() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <Link href="/" target="_blank" passHref>
            <Image src="/icon/logo.svg" width={60} height={60} alt="" />
          </Link>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <label className="checkbox-label text-lg color-palette-1">
          I have transferred the money
          <input type="checkbox" />
          <span className="checkmark"> </span>
        </label>
        <div className="d-md-block d-flex flex-column w-100 pt-50">
          <Link href="/checkout-completed" className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" role="button">
            Confirm Payment
          </Link>
        </div>
      </div>
    </section>
  )
}
