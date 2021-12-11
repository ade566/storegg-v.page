import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          {pageTitle}
        </title>
        <meta name="description" content="Website Top Up Voucher Game" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
