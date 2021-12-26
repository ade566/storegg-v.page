import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/Layout';
import MainBanner from '../components/organisms/MainBanner';
import TransactionSteps from '../components/organisms/TransactionSteps';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Layout pageTitle="Store GG">
      <MainBanner />
      <TransactionSteps />
      <FeaturedGame />
      <Reached />
      <Story />
    </Layout>
  )
}
