import Layout from '../../components/layout/member'
import Category from '../../components/organisms/OverviewContent/category'
import TrRow from '../../components/organisms/OverviewContent/tr-row'

export default function member() {
  return (
    <Layout pageTitle="Member Store GG" classSection="overview">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
            <div className="main-content">
              <div className="row">
                <Category icon="dekstop" nominal="180000">
                  Game
                  <br />
                  Desktop
                </Category>
                <Category icon="mobile" nominal="350000">
                  Game
                  <br />
                  Mobile
                </Category>
                <Category icon="categories" nominal="995000">
                  Other
                  <br />
                  Categories
                </Category>
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">Game</th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TrRow image="overview-1.png" title="Mobile Legends: The New Battle 2021" category="Desktop" gold="200" price="Rp 290.000" status="Pending" />
                  <TrRow image="overview-2.png" title="Call of Duty:Modern" category="Desktop" gold="550" price="Rp 740.000" status="Success" />
                  <TrRow image="overview-3.png" title="Clash of Clans" category="Mobile" gold="100" price="Rp 120.000" status="Failed" />
                  <TrRow image="overview-4.png" title="The Royal Game" category="Mobile" gold="225" price="Rp 200.000" status="Pending" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
