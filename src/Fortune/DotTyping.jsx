import { useEffect, useState } from 'react';

// 점 애니메이션 컴포넌트
function DotTyping() {
  // dots: 현재 점 문자열 상태 ('.', '..', '...' 등)
  const [dots, setDots] = useState('');

  useEffect(() => {
    // dots가 3개 이상이면 더 이상 추가하지 않음
    if(dots.length >= 3) return;
    // 0.4초마다 점을 하나씩 추가, 3개가 되면 다시 ''로 초기화
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 400);
    // 컴포넌트가 없어질 때 메모리 정리
    return () => clearInterval(interval);
  }, [dots]);

  // 점 문자열을 span에 출력 (폭 고정)
  return <span style={{display: 'inline-block', width: '2em'}}>{dots}</span>;
}

export default DotTyping;