import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Partners />
      <FAQ />
    </Layout>
  );
}
