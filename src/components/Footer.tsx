import { config } from '../config';
import { useEffect, useRef } from 'react';

export default function Footer() {
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
    <footer className="py-12 bg-black border-t border-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left animate-on-scroll fade-up">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient mb-2">
              Join the Movement
            </h3>
            <p className="text-gray-300 max-w-md">
              Be part of a community that puts security first. Together, we can build a safer DeFi
              ecosystem.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div
              className="flex items-center gap-4 animate-on-scroll fade-up"
              style={{ animationDelay: '200ms' }}
            >
              <a
                href={config.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl
                  hover:scale-110 transform transition-transform duration-300"
                aria-label="Twitter"
              >
                <div className="bg-black hover:bg-black/50 p-3 rounded-xl transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </a>
              <a
                href={config.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl
                  hover:scale-110 transform transition-transform duration-300"
                aria-label="Telegram"
              >
                <div className="bg-black hover:bg-black/50 p-3 rounded-xl transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.166.331.016.119.031.283.02.441z" />
                  </svg>
                </div>
              </a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="animate-on-scroll fade-up bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl
                hover:scale-110 transform transition-transform duration-300"
              style={{ animationDelay: '400ms' }}
              aria-label="Scroll to top"
            >
              <div className="bg-black hover:bg-black/50 p-3 rounded-xl transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div
          className="mt-8 pt-8 border-t border-gray-800 text-center animate-on-scroll fade-up"
          style={{ animationDelay: '600ms' }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {config.token.name}. All rights reserved.
          </p>
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
      `}</style>
    </footer>
  );
}
