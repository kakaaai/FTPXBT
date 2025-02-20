import { useState, useEffect } from 'react';
import { config } from '../config';

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-black text-primary hover:scale-105 transform transition-transform duration-300"
          >
            FTP
          </button>

          <nav
            className={`fixed md:relative top-20 md:top-0 left-0 w-full md:w-auto 
              ${isMenuOpen ? 'block' : 'hidden'} md:block bg-black/95 md:bg-transparent 
              backdrop-blur-md md:backdrop-blur-none shadow-lg md:shadow-none
              transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-0">
              {['about', 'features', 'how-it-works', 'partners', 'faq'].map((section, index) => (
                <li key={section} className="w-full md:w-auto">
                  <button
                    onClick={() => scrollToSection(section)}
                    className="nav-link w-full md:w-auto"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {section === 'faq'
                      ? 'FAQ'
                      : section
                          .split('-')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(' ')}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              {Object.entries(config.socials).map(([platform, url], index) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link bg-card hover:bg-cardHover text-primary hover:text-white 
                    p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={platform}
                >
                  {platform === 'twitter' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {platform === 'telegram' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.119.098.152.228.166.331.016.119.031.283.02.441z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            <a
              href={config.links.buyNow}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-black px-6 py-2.5 rounded-xl
                font-semibold transition-colors"
            >
              Buy Now
            </a>

            <button
              className="md:hidden w-10 h-10 relative focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out
                    ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out
                    ${isMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out
                    ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-gray-300 hover:text-primary transition-colors text-lg font-medium;
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .social-link {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
