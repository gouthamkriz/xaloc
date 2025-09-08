import React from 'react';

const animationClasses = {
    'fade-in-up': 'animate-fade-in-up',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
    'pulse-glow': 'animate-pulse-glow',
    'slide-in-word': 'animate-slide-in-word',
};

const AnimatedText = ({ text, animation = 'fade-in-up', className = '' }) => {
    const animationClass = animationClasses[animation] || '';
    return (
        <span className={`${animationClass} ${className}`}>
            {text}
        </span>
    );
};

export default AnimatedText;
