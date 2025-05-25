import { useEffect, useState } from 'react';

function DotTyping() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if(dots.length >= 3) return;
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 400);
    return () => clearInterval(interval);
  }, [dots]);

  return <span style={{display: 'inline-block', width: '2em'}}>{dots}</span>;
}

export default DotTyping;