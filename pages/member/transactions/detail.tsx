import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/layout/member'
import PaymentInformations from '../../../components/organisms/TransactionDetail/payment-informations'
import PurchaseDetails from '../../../components/organisms/TransactionDetail/purchase-details'

export default function DetailTransactions() {
  return (
    <Layout pageTitle="Detail Transactions" classSection="transactions-detail">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                  <div className="game-checkout d-flex flex-row align-items-center">
                    <div className="pe-4">
                      <div className="cropped">
                        <Image src="/img/Thumbnail-3.png" width="200" height="130" className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div>
                      <p className="fw-bold text-xl color-palette-1 mb-10">
                        Mobile Legends:
                        <br />
                        The New Battle 2021
                      </p>
                      <p className="color-palette-2 m-0">Category: Mobile</p>
                    </div>
                  </div>
                  <div>
                    <p className="fw-medium text-center label pending m-0 rounded-pill">Pending</p>
                  </div>
                </div>
                <hr />
                <PurchaseDetails />
                <PaymentInformations />
                <div className="d-md-block d-flex flex-column w-100">
                  <Link className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" href="/#" role="button">WhatsApp ke Admin</Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
