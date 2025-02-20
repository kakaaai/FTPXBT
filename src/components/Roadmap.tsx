import { config } from '../config';

type RoadmapItem = {
  id: number;
  quarter: string;
  title: string;
  description: string;
  image: string;
};

const roadmapItems: RoadmapItem[] = [
  {
    id: 1,
    quarter: 'Q1 2024',
    title: 'Launch and Community Building',
    description: 'Token launch, community growth, and initial charitable donations',
    image: '/images/roadmap1.jpg'
  },
  {
    id: 2,
    quarter: 'Q2 2024',
    title: 'Platform Enhancement',
    description: 'Website improvements, meme platform development, and expanded partnerships',
    image: '/images/roadmap2.jpg'
  },
  {
    id: 3,
    quarter: 'Q3 2024',
    title: 'Community Growth',
    description: 'Enhanced community features, meme contests, and charitable initiatives',
    image: '/images/roadmap3.jpg'
  },
  {
    id: 4,
    quarter: 'Q4 2024',
    title: 'Expanded Features',
    description: 'New platform features, partnerships, and community-driven initiatives',
    image: '/images/roadmap4.jpg'
  }
];

export default function Roadmap() {
  return (
    <section className="roadmap">
      <div className="container">
        <h2 className="roadmap__title">ROADMAP</h2>
        
        <div className="roadmap__map">
          <div className="roadmap__map-cards roadmap__map-cards__first">
            {roadmapItems.slice(0, 2).map((item) => (
              <div key={item.id} className="roadmap__map-card">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="roadmap__map-card-img"
                />
                <div className="roadmap__map-card-content">
                  <div className="roadmap__map-card-date">{item.quarter}</div>
                  <h3 className="roadmap__map-card-title">{item.title}</h3>
                  <p className="roadmap__map-card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="roadmap__map-line">
            <div className="roadmap__map-line-inner"></div>
          </div>

          <div className="roadmap__map-cards">
            {roadmapItems.slice(2).map((item) => (
              <div key={item.id} className="roadmap__map-card">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="roadmap__map-card-img"
                />
                <div className="roadmap__map-card-content">
                  <div className="roadmap__map-card-date">{item.quarter}</div>
                  <h3 className="roadmap__map-card-title">{item.title}</h3>
                  <p className="roadmap__map-card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="roadmap__map-line__mobile">
            <div className="roadmap__map-line-inner"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .roadmap {
          background: ${config.theme.colors.background};
          padding-top: 80px;
          margin-top: -80px;
          position: relative;
          z-index: 1;
        }

        .roadmap__title {
          text-align: center;
          font-size: 56px;
          font-weight: 900;
          line-height: 1.2;
          text-transform: uppercase;
          margin-bottom: 56px;
        }

        .roadmap__map {
          display: flex;
          justify-content: space-between;
          position: relative;
        }

        .roadmap__map-cards {
          width: 50%;
          max-width: 486px;
        }

        .roadmap__map-cards:last-child {
          margin-top: 180px;
        }

        .roadmap__map-card {
          display: flex;
          gap: 24px;
          margin-bottom: 182px;
        }

        .roadmap__map-card:last-child {
          margin-bottom: 0;
        }

        .roadmap__map-card-img {
          width: 180px;
          height: 180px;
          border-radius: 24px;
          object-fit: cover;
        }

        .roadmap__map-line-inner {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: ${config.theme.gradients.primary};
        }

        .roadmap__map-card-date {
          color: ${config.theme.colors.primary};
          font-weight: 600;
          margin-bottom: 16px;
        }

        .roadmap__map-card-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .roadmap__map-card-text {
          opacity: 0.8;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .roadmap__title {
            font-size: 32px;
            margin-bottom: 32px;
          }

          .roadmap__map {
            flex-direction: column;
            padding-left: 20px;
          }

          .roadmap__map-cards {
            width: 100%;
            max-width: none;
          }

          .roadmap__map-cards:last-child {
            margin-top: 0;
          }

          .roadmap__map-card {
            margin-bottom: 40px;
          }

          .roadmap__map-card-img {
            width: 100px;
            height: 100px;
            border-radius: 16px;
          }

          .roadmap__map-line__mobile {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: ${config.theme.gradients.primary};
          }

          .roadmap__map-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}