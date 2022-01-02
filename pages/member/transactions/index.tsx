import Layout from '../../../components/Layout/member'
import FilterTransactions from '../../../components/organisms/TransactionContents/filter'
import TrRow from '../../../components/organisms/TransactionContents/tr-row'

export default function transactions() {
  return (
    <Layout pageTitle="Transactions" classSection="transactions">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <FilterTransactions />
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">Game</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  <TrRow dataCategory="pending" img="overview-1.png" title="Mobile Legends: The New Battle 2021" category="Desktop" gold="200" nominal="290.000" status="Pending" />
                  <TrRow dataCategory="success" img="overview-2.png" title="Call of Duty:Modern" category="Desktop" gold="550" nominal="740.000" status="Success" />
                  <TrRow dataCategory="failed" img="overview-3.png" title="Clash of Clans" category="Mobile" gold="100" nominal="120.000" status="Failed" />
                  <TrRow dataCategory="pending" img="overview-3.png" title="The Royal Game" category="Mobile" gold="225" nominal="200.000" status="Pending" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
