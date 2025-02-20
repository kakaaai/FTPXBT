import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg mb-8 max-w-md">
          Oops! Looks like you've wandered into uncharted territory. 
          Even HUGO couldn't find this page!
        </p>
        <Link 
          href="/" 
          className="bg-gradient-to-r from-[#00cda0] via-[#00b3ff] to-[#fe00f8] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}