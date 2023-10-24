import '../styles/homepage.css'
import '../styles/utilities.css'
import '../styles/detail.css'
import '../styles/checkout.css'
import '../styles/checkout-completed.css'
import '../styles/sign-in.css'
import '../styles/sign-up.css'
import '../styles/sign-up-photo.css'
import '../styles/sign-up-success.css'
import '../styles/404.css'
import '../styles/sidebar.css'
import '../styles/overview.css'
import '../styles/transactions.css'
import '../styles/transactions-detail.css'
import '../styles/edit-profile.css'
import '../styles/navbar-log-in.css'

import Script from 'next/script'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* Boostrapp JS */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous" />
    </>
  );
}

export default MyApp
