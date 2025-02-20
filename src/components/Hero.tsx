import { useEffect, useState } from 'react';
import Link from 'next/link';
import { config } from '../config';
import { fetchStats } from '../utils/fetchStats';

interface Stats {
  holders: string;
  transfers: string;
  marketCap: string;
  totalLiquidity: string;
  liquidityBNB: string;
}

export default function Hero() {
  const [stats, setStats] = useState<Stats>({
    holders: '586',
    transfers: '12,321',
    marketCap: '394.1K',
    totalLiquidity: '74.81K',
    liquidityBNB: '57.44',
  });
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const updateStats = async () => {
      const newStats = await fetchStats();
      setStats(newStats);
    };

    updateStats();
    // Update stats every 5 minutes
    const interval = setInterval(updateStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(config.token.contract);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-white">
            FOR THE PEOPLE
            <br />
            <span className="text-white">BY THE PEOPLE</span>
            <span className="block text-4xl md:text-5xl mt-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Securing DeFi Through Community Power
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-slideUp delay-200">
            Building the future of BNB Chain security, born from the community's need for safer
            trading. Our platform combines advanced token scanning technology with grassroots
            community governance.
          </p>

          {/* Contract Address */}
          <div className="mb-12 animate-slideUp delay-300">
            <div className="text-lg text-primary mb-4">Contract Address</div>
            <div className="flex items-start justify-between gap-4 bg-card rounded-2xl p-6 group">
              <button
                onClick={copyToClipboard}
                className="font-mono text-2xl text-white break-all text-left hover:text-primary transition-colors"
              >
                {config.token.contract}
              </button>
              <button
                onClick={copyToClipboard}
                className="flex-shrink-0 text-gray-400 group-hover:text-primary transition-colors"
              >
                {copied ? 'Copied!' : 'Click to copy'}
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          <div
            className={`fixed bottom-4 right-4 bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl
            transition-all duration-300 transform ${
              showToast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="bg-black px-6 py-3 rounded-xl text-white font-semibold">
              Address copied to clipboard!
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-slideUp delay-300">
            <div className="bg-card rounded-2xl p-6">
              <div className="flex flex-col justify-between h-full">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  FTPXBT
                </div>
                <div className="text-sm text-gray-400 mt-2">Symbol</div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <div className="flex flex-col justify-between h-full">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  ${stats.marketCap}
                </div>
                <div className="text-sm text-gray-400 mt-2">Market Cap</div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <div className="flex flex-col justify-between h-full">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  ${stats.totalLiquidity}
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-400">Total Liquidity</div>
                  <div className="text-primary text-sm">({stats.liquidityBNB} WBNB)</div>
                  <span className="text-xl" role="img" aria-label="fire">
                    🔥
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6">
              <div className="flex flex-col justify-between h-full">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  {stats.holders}
                </div>
                <div className="text-sm text-gray-400 mt-2">Holders</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 animate-slideUp delay-400">
            <Link
              href={config.links.buyNow}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl
                hover:scale-105 transform transition-transform duration-300"
            >
              <div
                className="bg-black hover:bg-black/50 text-white px-8 py-4 rounded-xl
                font-bold text-lg transition-colors"
              >
                Buy Now
              </div>
            </Link>
            <Link
              href={config.links.chart}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card text-white px-8 py-4 rounded-xl font-bold text-lg
                hover:bg-cardHover transition-colors"
            >
              View Chart
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 5s ease infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
