import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';

export default function Footer() {
  const company = [
    ['/#', 'About Us'],
    ['/#', 'Press Release'],
    ['/#', 'Terms of Use'],
    ['/#', 'Privacy & Policy'],
  ];
  const support = [
    ['/#', 'Refund Policy'],
    ['/#', 'Unlock Rewards'],
    ['/#', 'Live Chatting'],
  ];
  const connect = [
    ['mailto: hi@store.gg', 'hi@store.gg'],
    ['mailto: team@store.gg', 'team@store.gg'],
    ['http://maps.google.com/?q=Pasific 12, Jakarta Selatan', 'Pasific 12, Jakarta Selatan'],
    ['tel: 02111229090', '021 - 1122 - 9090'],
  ];
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="" />
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                untuk menjadi
                pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <Menu title="Company" listMenu={company} />
                <Menu title="Support" listMenu={support} />
                <Menu title="Connect" listMenu={connect} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
