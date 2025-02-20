import { config } from '../config';
import { useEffect, useRef } from 'react';

const CoinMarketCapLogo = () => (
  <svg viewBox="0 0 76.52 77.67" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path
      d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z"
      fill="#17181b"
    />
  </svg>
);

const CoinGeckoLogo = () => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 276 276"
    className="w-full h-full"
  >
    <defs>
      <style>{`.cls-1{fill:#8dc63f;}.cls-2{fill:#f9e988;}.cls-3{fill:#fff;}.cls-4{fill:#8bc53f;}.cls-5{fill:#009345;}.cls-6{fill:#58595b;}`}</style>
    </defs>
    <title>CoinGecko</title>
    <g id="Coin_Gecko_AI" data-name="Coin Gecko AI">
      <path
        className="cls-1"
        d="M276,137.39A138,138,0,1,1,137.39,0h0A138,138,0,0,1,276,137.39Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-2"
        d="M265.65,137.44a127.63,127.63,0,1,1-128.21-127h0A127.65,127.65,0,0,1,265.65,137.44Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-3"
        d="M140.35,18.66a70.18,70.18,0,0,1,24.53,0,74.75,74.75,0,0,1,23.43,7.85c7.28,4,13.57,9.43,19.83,14.52s12.49,10.3,18.42,16a93.32,93.32,0,0,1,15.71,19,108.28,108.28,0,0,1,11,22.17c5.33,15.66,7.18,32.53,4.52,48.62H257c-2.67-15.95-6.29-31.15-12-45.61A177.51,177.51,0,0,0,235.56,80,209.1,209.1,0,0,0,223.14,60a72.31,72.31,0,0,0-16.64-16.8c-6.48-4.62-13.93-7.61-21.14-10.45S171,27,163.48,24.84s-15.16-3.78-23.14-5.35Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-4"
        d="M202.74,92.39c-9.26-2.68-18.86-6.48-28.58-10.32-.56-2.44-2.72-5.48-7.09-9.19-6.35-5.51-18.28-5.37-28.59-2.93-11.38-2.68-22.62-3.63-33.41-1C16.82,93.26,66.86,152.57,34.46,212.19c4.61,9.78,54.3,66.84,126.2,51.53,0,0-24.59-59.09,30.9-87.45C236.57,153.18,269.09,110.46,202.74,92.39Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-3"
        d="M213.64,131.2a5.35,5.35,0,1,1-5.38-5.32A5.36,5.36,0,0,1,213.64,131.2Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-5"
        d="M138.48,69.91c6.43.46,29.68,8,35.68,12.12-5-14.5-21.83-16.43-35.68-12.12Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-3"
        d="M144.6,106.58a24.68,24.68,0,1,1-24.69-24.67h0a24.68,24.68,0,0,1,24.68,24.66Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-6"
        d="M137.28,106.8a17.36,17.36,0,1,1-17.36-17.36h0A17.36,17.36,0,0,1,137.28,106.8Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-4"
        d="M233.63,142.08c-20,14.09-42.74,24.78-75,24.78-15.1,0-18.16-16-28.14-8.18-5.15,4.06-23.31,13.14-37.72,12.45S55,162,48.49,131.23C45.91,162,44.59,184.65,33,210.62c23,36.83,77.84,65.24,127.62,53C155.31,226.27,188,189.69,206.34,171c7-7.09,20.3-18.66,27.29-28.91Z"
        transform="translate(0 0)"
      />
      <path
        className="cls-6"
        d="M232.85,143c-6.21,5.66-13.6,9.85-21.12,13.55a134.9,134.9,0,0,1-23.7,8.63c-8.16,2.11-16.67,3.7-25.29,2.92s-17.43-3.71-23.14-10.17l.27-.31c7,4.54,15.08,6.14,23.12,6.37a108.27,108.27,0,0,0,24.3-2,132.71,132.71,0,0,0,23.61-7.3c7.63-3.15,15.18-6.8,21.68-12Z"
        transform="translate(0 0)"
      />
    </g>
  </svg>
);

const PancakeSwapLogo = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 31.7 32"
    className="w-full h-full"
  >
    <style type="text/css">
      {`.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#633001;}
        .st1{fill:#FEDC90;}
        .st2{fill-rule:evenodd;clip-rule:evenodd;fill:#D1884F;}
        .st3{fill:#633001;}`}
    </style>
    <path
      className="st0"
      d="M5.7,5C5.2,2.4,7.2,0,9.8,0c2.3,0,4.2,1.9,4.2,4.2v5.2c0.6,0,1.2-0.1,1.8-0.1c0.6,0,1.1,0,1.7,0.1V4.2
      c0-2.3,1.9-4.2,4.2-4.2c2.6,0,4.6,2.4,4.2,5l-1.1,6.1c3.9,1.7,6.9,4.7,6.9,8.4v2.3c0,3.1-2,5.7-4.9,7.4c-2.9,1.8-6.7,2.8-11,2.8
      s-8.1-1-11-2.8C2,27.5,0,24.9,0,21.8v-2.3c0-3.7,2.9-6.7,6.8-8.4L5.7,5z M23.3,11.9l1.3-7.2c0.3-1.8-1-3.5-2.9-3.5
      c-1.6,0-2.9,1.3-2.9,2.9v6.6c-0.4-0.1-0.9-0.1-1.3-0.1c-0.6,0-1.1-0.1-1.7-0.1c-0.6,0-1.2,0-1.8,0.1c-0.4,0-0.9,0.1-1.3,0.1V4.2
      c0-1.6-1.3-2.9-2.9-2.9C8,1.3,6.6,3,7,4.8L8.3,12c-4.2,1.6-7,4.4-7,7.6v2.3c0,4.9,6.5,8.9,14.5,8.9c8,0,14.5-4,14.5-8.9v-2.3
      C30.4,16.3,27.6,13.5,23.3,11.9z"
    />
    <path
      className="st1"
      d="M30.4,21.8c0,4.9-6.5,8.9-14.5,8.9c-8,0-14.5-4-14.5-8.9v-2.3h29.1V21.8z"
    />
    <path
      className="st2"
      d="M7,4.8C6.6,3,8,1.3,9.8,1.3c1.6,0,2.9,1.3,2.9,2.9v6.6c1-0.1,2-0.2,3.1-0.2c1,0,2,0.1,3,0.2V4.2
      c0-1.6,1.3-2.9,2.9-2.9c1.8,0,3.2,1.7,2.9,3.5l-1.3,7.2c4.2,1.6,7.1,4.4,7.1,7.6c0,4.9-6.5,8.9-14.5,8.9c-8,0-14.5-4-14.5-8.9
      c0-3.2,2.8-6,7-7.6L7,4.8z"
    />
    <path
      className="st3"
      d="M11.8,18.9c0,1.3-0.7,2.4-1.6,2.4c-0.9,0-1.6-1.1-1.6-2.4s0.7-2.4,1.6-2.4C11.1,16.5,11.8,17.6,11.8,18.9z"
    />
    <path
      className="st3"
      d="M22.9,18.9c0,1.3-0.7,2.4-1.6,2.4c-0.9,0-1.6-1.1-1.6-2.4s0.7-2.4,1.6-2.4C22.2,16.5,22.9,17.6,22.9,18.9z"
    />
  </svg>
);

const GMGNLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect x="10" width="2" height="2" fill="#A3E050" />
    <rect x="12" width="2" height="2" fill="#A3E050" />
    <rect x="14" width="2" height="2" fill="#457F2C" />
    <rect x="22" width="2" height="2" fill="#A3E050" />
    <rect x="24" width="2" height="2" fill="#A3E050" />
    <rect x="26" width="2" height="2" fill="#457F2C" />
    <rect x="10" y="2" width="2" height="2" transform="rotate(90 10 2)" fill="#457F2C" />
    <rect x="10" y="2" width="2" height="2" fill="#D5F86B" />
    <rect x="12" y="2" width="2" height="2" fill="#D5F86B" />
    <rect x="14" y="2" width="2" height="2" fill="#A3E050" />
    <rect x="18" y="2" width="2" height="2" transform="rotate(90 18 2)" fill="#457F2C" />
    <rect x="22" y="2" width="2" height="2" transform="rotate(90 22 2)" fill="#457F2C" />
    <rect x="22" y="2" width="2" height="2" fill="#D5F86B" />
    <rect x="24" y="2" width="2" height="2" fill="#D5F86B" />
    <rect x="26" y="2" width="2" height="2" fill="#A3E050" />
    <rect x="30" y="2" width="2" height="2" transform="rotate(90 30 2)" fill="#457F2C" />
  </svg>
);

const partners = [
  {
    name: 'CoinMarketCap',
    Logo: CoinMarketCapLogo,
    url: 'https://coinmarketcap.com/dexscan/bsc/0x667d805408a2bd9cc84eeab1e480240a4e3cc92b/',
    description: 'Leading cryptocurrency data platform',
  },
  {
    name: 'CoinGecko',
    Logo: CoinGeckoLogo,
    url: 'https://www.geckoterminal.com/bsc/pools/0x667d805408a2bd9cc84eeab1e480240a4e3cc92b?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults',
    description: 'Trusted cryptocurrency data aggregator',
  },
  {
    name: 'PancakeSwap',
    Logo: PancakeSwapLogo,
    url: 'https://pancakeswap.finance/?outputCurrency=0xAC3C6176511771129568Ea308Dd151073498DC7d',
    description: 'Leading decentralized exchange on BNB Chain',
  },
  {
    name: 'GMGN',
    Logo: GMGNLogo,
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
                <div className="w-[180px] h-[60px] transition-transform duration-300 group-hover:scale-110">
                  <partner.Logo />
                </div>
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
