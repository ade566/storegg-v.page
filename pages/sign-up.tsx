import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import SignUpForm from '../components/organisms/AuthForm/sign-up'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <Link href="/" className="navbar-brand">
                <Image src="/icon/logo.svg" width={60} height={60} alt="" />
              </Link>
            </div>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
            <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
            <SignUpForm />
            <div className="button-group d-flex flex-column mx-auto pt-50">
              <Link href="/sign-up-photo" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16" role="button">
                Continue
              </Link>
              <Link href="/sign-in" className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" role="button">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
