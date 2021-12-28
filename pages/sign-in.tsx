import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SignInForm from '../components/organisms/AuthForm/sign-in'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <section className="sign-in mx-auto">
        <div className="row">
          <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
            <form action="">
              <div className="container mx-auto">
                <div className="pb-50">
                  <Link href="/">
                    <a className="navbar-brand" href="/#">
                      <Image src="/icon/logo.svg" width={60} height={60} />
                    </a>
                  </Link>
                </div>
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
                <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
                <SignInForm />
                <div className="button-group d-flex flex-column mx-auto pt-50">
                  <Link href="/">
                    <a className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" href="/#" role="button">Continue to Sign In</a>
                  </Link>
                  <Link href="/sign-up">
                    <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill" href="/#" role="button">Sign Up</a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
            <img src="/img/Header-9.png" width="502" height="391.21" className="img-fluid pb-50" alt="" />
            <h2 className="text-4xl fw-bold text-white mb-30">
              Win the battle.
              <br />
              Be the Champion.
            </h2>
            <p className="text-white m-0">
              Kami menyediakan jutaan cara untuk
              <br />
              membantu players menjadi
              <br />
              pemenang sejati
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
