import React from 'react';

const SlidingText = ({ texts, delay = 0, direction = 'left' }) => {
  return (
    <div className="relative overflow-hidden bg-xaloc-beige">
      <div className="flex items-center justify-center">
        <div
          className="whitespace-nowrap text-3xl md:text-5xl lg:text-7xl font-bold text-xaloc-charcoal opacity-80"
          style={{
            animation: `slideText${direction === 'right' ? 'Reverse' : ''} 200s linear infinite`,
            animationDelay: `${delay}s`,
            fontFamily: "'Inter', sans-serif",
            transform: 'perspective(1000px) rotateX(12deg)',
            transformOrigin: 'center center'
          }}
        >
          {/* Multiple duplicates for seamless infinite loop */}
          {texts.map((text, index) => (
            <span key={index} className="inline-block mx-0">
              {text}
            </span>
          ))}
          {texts.map((text, index) => (
            <span key={`duplicate1-${index}`} className="inline-block mx-0">
              {text}
            </span>
          ))}
          {texts.map((text, index) => (
            <span key={`duplicate2-${index}`} className="inline-block mx-0">
              {text}
            </span>
          ))}
          {texts.map((text, index) => (
            <span key={`duplicate3-${index}`} className="inline-block mx-0">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SlidingTextSection = () => {
  const texts1 = [
    "Wherever your audience is, we'll reach them*",
    "Round-the-clock assistance, wherever you are*",
    "Your growth team, one call away*",
    "Because time is money — we save you both*",
    "Data-driven strategies. Measurable impact*",
    "Wherever your audience is, we'll reach them*",
    "Round-the-clock assistance, wherever you are*",
    "Your growth team, one call away*",
    "Because time is money — we save you both*",
    "Data-driven strategies. Measurable impact*"
  ];

  const texts2 = [
    "More leads. More sales. More growth*",
    "Where strategy meets creativity*",
    "Designs that stop the scroll.",
    "Agile team. Proven results*",
    "No borders. No limits. Just growth*",
    "More leads. More sales. More growth*",
    "Where strategy meets creativity*",
    "Designs that stop the scroll*",
    "Agile team. Proven results*",
    "No borders. No limits. Just growth*"
  ];

  return (
    <div className="relative">
      <SlidingText texts={texts1} delay={0} direction="left" />
      <SlidingText texts={texts2} delay={2} direction="right" />
    </div>
  );
};

export default SlidingTextSection;
