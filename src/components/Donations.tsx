import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { config } from '../config';

// Add Swiper types
declare global {
  interface Window {
    Swiper: any;
  }
}

type Donation = {
  id: number;
  organization: string;
  date: string;
  image: string;
  amountSOL: number;
  amountUSD: number;
  verified: boolean;
};

// Example donation data - in a real app, this would come from an API
const donations: Donation[] = [
  {
    id: 1,
    organization: 'Dog Shelter',
    date: '2024-01-15',
    image: '/images/charity1.jpg',
    amountSOL: 8.01,
    amountUSD: 1668.37,
    verified: true
  },
  {
    id: 2,
    organization: 'Animal Rescue',
    date: '2024-01-20',
    image: '/images/charity2.jpg',
    amountSOL: 16.01,
    amountUSD: 3336.64,
    verified: true
  }
];

export default function Donations() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Swiper
    if (typeof window !== 'undefined' && swiperRef.current) {
      const Swiper = (window as any).Swiper;
      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
          }
        }
      });

      return () => {
        if (swiperInstanceRef.current) {
          swiperInstanceRef.current.destroy(true, true);
        }
      };
    }
  }, []);

  const totalSOL = donations.reduce((sum, donation) => sum + donation.amountSOL, 0);
  const totalUSD = donations.reduce((sum, donation) => sum + donation.amountUSD, 0);

  return (
    <section className="donation">
      <div className="container">
        <div className="donation__wrapper">
          <div className="donation__header">
            <h2 className="donation__title">DONATION</h2>
            <div className="donation__header-tag">
              TOTAL DONATIONS: <span>{totalSOL.toFixed(2)} SOL / ${totalUSD.toFixed(2)}</span>
            </div>
          </div>

          <div className="swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {donations.map((donation) => (
                <div key={donation.id} className="swiper-slide">
                  <Link href="#" className="donation__card">
                    <div className="donation__card-header">
                      <img 
                        src={donation.image} 
                        alt={donation.organization} 
                        className="donation__card-img"
                      />
                      <div className="donation__card-header-content">
                        <h3 className="donation__card-title">{donation.organization}</h3>
                        <div className="donation__card-subtitle">
                          {new Date(donation.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                          <span></span>
                          {donation.verified ? 'Verified' : 'Pending'}
                        </div>
                      </div>
                    </div>
                    <div className="donation__card-footer">
                      <div className="donation__card-footer-title">Amount</div>
                      <div className="donation__card-footer-info">
                        <div className="donation__card-footer-item">
                          {donation.amountSOL.toFixed(2)} SOL
                        </div>
                        <div className="donation__card-footer-item">
                          ${donation.amountUSD.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>

      {/* Animated text lines */}
      <div className="donation__lines">
        <div className="donation__line">
          <div className="donation__line-row">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="donation__line-text">
                VERIFIED DONATIONS <i className="fas fa-paw"></i>
              </div>
            ))}
          </div>
        </div>
        <div className="donation__line">
          <div className="donation__line-row">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="donation__line-text">
                VERIFIED DONATIONS <i className="fas fa-paw"></i>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .donation {
          background: ${config.theme.colors.background};
        }

        .donation__header-tag {
          background: linear-gradient(180deg, rgba(0, 255, 186, 0.14) 43.89%, rgba(0, 255, 186, 0) 100%);
          border: 2px solid ${config.theme.colors.primary};
        }

        .donation__card {
          background: linear-gradient(180deg, rgba(0, 255, 186, 0.14) 43.89%, rgba(0, 255, 186, 0) 100%);
          border: 2px solid transparent;
          transition: border-color 0.3s;
        }

        .donation__card:hover {
          border-color: ${config.theme.colors.primary};
        }

        .donation__line {
          background: ${config.theme.colors.primary};
          border-top: 4px solid ${config.theme.colors.primary};
          border-bottom: 4px solid ${config.theme.colors.primary};
        }

        @media (max-width: 768px) {
          .donation__title {
            font-size: 32px;
          }

          .donation__header-tag {
            font-size: 14px;
            padding: 12px;
          }

          .donation__card {
            height: auto;
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}