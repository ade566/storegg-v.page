import { ReactNode } from 'react';
import Head from 'next/head';
import SideBar from '../organisms/SideBar';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
  classSection: string;
}
export default function MemberLayout(props: LayoutProps) {
  const { children, pageTitle, classSection } = props;
  const section = `${classSection} overflow-auto`;

  return (
    <>
      <Head>
        <title>
          {pageTitle}
        </title>
        <meta name="description" content="Website Top Up Voucher Game" />
      </Head>
      <section className={section}>
        <SideBar />

        {children}

      </section>
    </>
  );
}
