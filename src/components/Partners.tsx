import { config } from '../config';
import { useEffect, useRef } from 'react';

const partners = [
  {
    name: 'CoinMarketCap',
    logo: '/images/partners/coinmarketcap-1.svg',
    url: 'https://coinmarketcap.com/dexscan/bsc/0x667d805408a2bd9cc84eeab1e480240a4e3cc92b/',
    description: 'Leading cryptocurrency data platform',
  },
  {
    name: 'CoinGecko',
    logo: '/images/partners/CoinGecko Logo.svg',
    url: 'https://www.geckoterminal.com/bsc/pools/0x667d805408a2bd9cc84eeab1e480240a4e3cc92b?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults',
    description: 'Trusted cryptocurrency data aggregator',
  },
  {
    name: 'PancakeSwap',
    logo: '/images/partners/pancakeswap-cake-logo.png',
    url: 'https://pancakeswap.finance/?outputCurrency=0xAC3C6176511771129568Ea308Dd151073498DC7d',
    description: 'Leading decentralized exchange on BNB Chain',
  },
  {
    name: 'GMGN',
    logo: '/images/partners/gmgn.svg',
    url: 'https://gmgn.ai/bsc/token/iH46GPbR_0xac3c6176511771129568ea308dd151073498dc7d',
    description: 'Advanced DeFi analytics and tracking platform',
  },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="py-16 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Trusted Partners
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            We collaborate with industry leaders to ensure the highest standards of security and
            reliability in the DeFi space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll fade-up-stagger bg-card rounded-2xl p-8 
                flex flex-col items-center gap-6 hover:bg-cardHover transition-all duration-300 
                transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full h-20 relative flex items-center justify-center group">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[180px] max-h-[60px] object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={e => {
                    console.error(`Error loading ${partner.name} logo`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-300 text-sm">{partner.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll fade-up">
          <div className="inline-flex flex-col items-center">
            <p className="text-white font-semibold mb-2">Want to partner with us?</p>
            <p className="text-gray-300 mb-6">Join us in making DeFi safer for everyone</p>
            <div className="flex gap-4">
              <a
                href={config.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl
                  hover:scale-105 transform transition-transform duration-300"
              >
                <div
                  className="bg-black hover:bg-black/50 text-white px-6 py-3 rounded-xl
                  font-semibold transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Twitter</span>
                </div>
              </a>
              <a
                href={config.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl
                  hover:scale-105 transform transition-transform duration-300"
              >
                <div
                  className="bg-black hover:bg-black/50 text-white px-6 py-3 rounded-xl
                  font-semibold transition-colors flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.166.331.016.119.031.283.02.441z" />
                  </svg>
                  <span>Telegram</span>
                </div>
              </a>
            </div>
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

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.show {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-up-stagger {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .fade-up-stagger.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
