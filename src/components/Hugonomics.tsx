import { useState } from 'react';
import { config } from '../config';

export default function Hugonomics() {
  const [copyMsg, setShowCopyMsg] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(config.token.contract);
      setShowCopyMsg(true);
      setTimeout(() => setShowCopyMsg(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="dukonomics">
      <div className="container">
        <div className="dukonomics__wrapper">
          <div className="dukonomics__header">
            <h2 className="dukonomics__title">HUGONOMICS</h2>
            <div className="dukonomics__header-tag">
              TOTAL SUPPLY: <span>{config.token.totalSupply}</span>
            </div>
          </div>

          <div className="dukonomics__content">
            <div className="dukonomics__main">
              <div className="dukonomics__diagram">
                {/* Distribution diagram */}
                <div className="dukonomics__chart">
                  {Object.entries(config.distribution).map(([key, value]) => (
                    <div 
                      key={key}
                      className="dukonomics__chart-segment"
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        clipPath: `conic-polygon(from ${value.percentage}deg, var(--segment-color) 0deg ${value.percentage}deg)`
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="dukonomics__main-tag">
                <div className="dukonomics__main-tag-title">
                  CONTRACT
                </div>
                <div className="dukonomics__main-tag-right">
                  <textarea
                    className="dukonomics__main-tag-right-textarea"
                    readOnly
                    value={config.token.contract}
                  />
                  <div className="dukonomics__main-tag-address">
                    {config.token.contract}
                  </div>
                  <button 
                    className="dukonomics__main-tag-copy"
                    onClick={copyToClipboard}
                    aria-label="Copy contract address"
                  >
                    <i className="far fa-copy"></i>
                  </button>
                  <div className={`dukonomics__main-tag-msg ${copyMsg ? 'dukonomics__main-tag-msg_active' : ''}`}>
                    Copied!
                  </div>
                </div>
              </div>
            </div>

            <div className="dukonomics__distribution">
              {Object.entries(config.distribution).map(([key, value]) => (
                <div key={key} className="dukonomics__distribution-item">
                  <span className="dukonomics__distribution-percentage">
                    {value.percentage}%
                  </span>
                  <span className="dukonomics__distribution-label">
                    {value.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dukonomics {
          background: ${config.theme.colors.background};
        }

        .dukonomics__header-tag {
          background: ${config.theme.gradients.primary};
          border-radius: 80px;
          padding: 16px 32px;
        }

        .dukonomics__chart {
          position: relative;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: ${config.theme.gradients.primary};
          opacity: 0.1;
        }

        .dukonomics__main-tag {
          background: ${config.theme.colors.background};
          border: 2px solid ${config.theme.colors.primary};
          border-radius: 80px;
        }

        .dukonomics__main-tag-copy {
          cursor: pointer;
          transition: opacity 0.3s;
        }

        .dukonomics__main-tag-copy:hover {
          opacity: 0.8;
        }

        .dukonomics__main-tag-msg {
          background: ${config.theme.colors.background};
          color: ${config.theme.colors.text};
        }

        @media (max-width: 768px) {
          .dukonomics__chart {
            width: 300px;
            height: 300px;
          }

          .dukonomics__distribution {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}