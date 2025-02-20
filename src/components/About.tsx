import { config } from '../config';

export default function About() {
  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              About {config.token.name}
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            A community-driven platform revolutionizing DeFi security through advanced token
            scanning and collective governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {config.features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 hover:bg-cardHover transition-all duration-300"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.howItWorks.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 hover:bg-cardHover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-primary to-secondary p-[1px] rounded-xl">
                    <div className="bg-black px-4 py-2 rounded-xl">{index + 1}</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
      `}</style>
    </section>
  );
}
