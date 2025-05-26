import React, { useEffect, useState } from 'react';
import './TodayFortune.css'; // fade-in 효과를 위해 필요하다면 import

// 점 애니메이션 컴포넌트
function DotTypingWithCallback({ onDone }) {
    const [dotCount, setDotCount] = useState(0);

    useEffect(() => {
        if (dotCount >= 3) {
            const timeout = setTimeout(() => onDone(), 500);
            return () => clearTimeout(timeout);
        }
        const interval = setInterval(() => {
            setDotCount(prev => prev + 1);
        }, 400);
        return () => clearInterval(interval);
    }, [dotCount, onDone]);

    return (
        <span style={{ display: 'inline-block', width: '2em' }}>
            <span className={`fade-in${dotCount > 0 ? ' show' : ''}`}>.</span>
            <span className={`fade-in${dotCount > 1 ? ' show' : ''}`} style={{ transitionDelay: '0.15s' }}>.</span>
            <span className={`fade-in${dotCount > 2 ? ' show' : ''}`} style={{ transitionDelay: '0.3s' }}>.</span>
        </span>
    );
}

export default DotTypingWithCallback;