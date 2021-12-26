import List from './list';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <List p1="290M+" p2="Players Top Up" />
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"> </div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"> </div>
          <List p1="12.500" p2="Games Available" divClass=" ms-lg-35" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"> </div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"> </div>
          <List p1="99,9%" p2="Happy Players" divClass=" ms-lg-35" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"> </div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"> </div>
          <List p1="4.7" p2="Rating Worldwide" divClass=" ms-lg-35" />
        </div>
      </div>
    </section>
  )
}
