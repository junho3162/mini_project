// *안쓰는 컴포넌트*

// import { useEffect, useState } from 'react';

// // 점 애니메이션 컴포넌트
// function DotTyping() {
//   // dots: 현재 점 문자열 상태 ('.', '..', '...' 등)
//   const [dots, setDots] = useState('');

//   useEffect(() => {
//     // dots가 3개가 되면 interval을 멈추고 그대로 유지
//     if (dots.length >= 3) return;
//     const interval = setInterval(() => {
//       setDots(prev => (prev.length < 3 ? prev + '.' : prev));
//     }, 400);
//     return () => clearInterval(interval);
//   }, [dots]);

//   // 점 문자열을 span에 출력 (폭 고정)
//   return <span style={{display: 'inline-block', width: '2em'}}>{dots}</span>;
// }

// export default DotTyping;