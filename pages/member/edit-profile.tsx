import Image from 'next/image'
import Layout from '../../components/Layout/member'

export default function member() {
  const labelClass = 'form-label text-lg fw-medium color-palette-1 mb-10';
  const inputClass = 'form-control rounded-pill text-lg';

  return (
    <Layout pageTitle="Member Store GG" classSection="edit-profile">
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <Image src="/img/avatar-1.png" width={90} height={90} className="avatar img-fluid" />
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <img src="/icon/trace.svg" alt="" />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <Image src="/icon/upload-foto.svg" width={90} height={90} />
                  </label>
                  <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                </div>
              </div>
              <div className="pt-30">
                <label htmlFor="name" className={labelClass}>Full Name</label>
                <input type="text" className={inputClass} id="name" name="name" aria-describedby="name" placeholder="Enter your name" />
              </div>
              <div className="pt-30">
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input type="email" className={inputClass} id="email" name="email" aria-describedby="email" placeholder="Enter your email address" />
              </div>
              <div className="pt-30">
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input type="tel" className={inputClass} id="phone" name="phone" aria-describedby="phone" placeholder="Enter your phone number" />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill">Save My Profile</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}
