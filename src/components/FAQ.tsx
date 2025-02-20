import { useState } from 'react';

const faqs = [
  {
    question: 'What makes FTPXBT different from other meme coin projects?',
    answer:
      "While FTPXBT embraces the fun and community spirit of meme coins, it packs serious technological punch. Unlike typical meme tokens that just ride hype, FTPXBT delivers real utility through its security scanning system. It's like having a watchdog with a sense of humor – making crypto security both accessible and entertaining.",
  },
  {
    question: 'How serious is the tech behind this meme coin?',
    answer:
      "Don't let the meme vibes fool you – FTPXBT's technology is no joke. The platform integrates with professional-grade APIs (Dexscreener, BSCScan) and runs sophisticated security algorithms. Born from an actual rug pull incident, the team channeled their experience into building legitimate security infrastructure while keeping the engaging meme coin energy.",
  },
  {
    question: "What's the community's role in FTPXBT?",
    answer:
      "The community isn't just along for the ride – they're in the driver's seat. FTPXBT combines the viral nature of meme coins with genuine community-driven development. When The Trenches community got rugged, they didn't just make memes about it – they built a solution. This perfect blend of meme culture and security tech creates an engaged community that actually helps protect each other.",
  },
  {
    question: 'How does FTPXBT balance being a meme coin with serious security features?',
    answer:
      'Think of FTPXBT as the mullet of crypto – business in the front, party in the back. The security features are robust and professional, scanning for everything from deployer histories to liquidity patterns. But the community engagement and communication style keeps things fun and accessible, making complex security concepts easier to understand and share.',
  },
  {
    question: 'Is this just another "utility token" trying to look serious?',
    answer:
      "FTPXBT flips the script on typical meme coins. Instead of starting with memes and desperately searching for utility, it began with a real problem (rug pulls) and a real solution (security scanning), then wrapped it in an engaging meme package. The tech doesn't just exist on a roadmap – it's live, working, and actively helping protect traders while maintaining that classic meme coin charm.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
            FTPXBT
          </span>
        </h2>
        <h3 className="text-2xl md:text-3xl text-center mb-12 text-white flex items-center justify-center gap-2">
          Protectors of the Memeconomy
        </h3>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-cardHover transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 text-gray-300 text-lg">{faq.answer}</div>
              </div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
}
