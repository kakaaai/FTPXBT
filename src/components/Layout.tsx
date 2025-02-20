import Head from 'next/head';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { config } from '../config';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = config.meta.title,
  description = config.meta.description,
}: LayoutProps) {
  return (
    <ErrorBoundary>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={config.theme.colors.background} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.token.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={config.meta.twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col text-white bg-black relative">
        {/* Background Glow Effect */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-20"></div>
        </div>

        <NavigationBar />

        <main className="flex-grow relative">
          {/* Content */}
          <div className="relative z-10">{children}</div>

          {/* Section Dividers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-px w-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"></div>
          </div>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
