import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [menuVisible, setMenuVisible] = useState(false);
      const [writingVisible, setWritingVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const showWriting = () => {
    setWritingVisible(true);
  };

  const hideWriting = () => {
    setWritingVisible(false);
  };

  return (
    <div className="달력">
      <div className="box">
      {writingVisible && (
       <div className='글쓰기'>
        <div className='바탕' onClick={hideWriting}></div>
        <img src="오리.png" className="오리2" alt="오리3" />
        <div className='일기상자'>
        <div className='동그라미2'>
          <p>이번여행 즐거우셨나요?</p>
        </div>
        <div className='일기상자2'>
          <img src="별.png" className="별2" alt="4" />
          <img src="손.png" className="손2" alt="4" />
          <div className='선5'></div>
          <div className='선6'></div>
          <div className='선7'></div>
          <div className='선8'></div>
          <div className='카메라칸2'>
            <img src="카메라.png" className="카메라2" alt="4" />
          </div>
        </div>
        </div>
       </div>
        )}
       <div className="오리박스">
        <div className="오리컨테이너">
         <img src="오리2.png" className="오리이미지" alt="오리1" />
         <img src="나무.png" className="나무이미지" alt="오리2" />
        </div>
       <div className="민트박스">
        <div className='달력내용'>
         <div className='연도'>
           <p>2025</p>
         </div>
         <div className='월'>
           <p>5</p>
         </div>
         <div className='요일'>
          <div className='월화수'>
            <p>Su   Mo   Tu   We   Th   Tr   Sa</p>
          </div>
           <div className='일1'>
            <p>    27    28    29   30    1      2     3      </p>
           </div> 
           <div className='일2'>
            <p>  4     5     6    7     8     9    10  </p>
           </div>
           <div className='일3'>
            <p> 11    12   13   14   15   16   17 </p>
           </div>
           <div className='일4'>
            <p> 18    19   20   21   22   23   24 </p>
           </div>
           <div className='일5'>
            <p> 25    26   27   28   29   30   31 </p>
           </div>
         </div>
       </div>
      </div>
       <div className="왼쪽파란박스" onClick={showWriting}>
        <div className='일기칸'>
          <img src="별.png" className="별" alt="4" />
          <img src="손.png" className="손" alt="4" />
          <div className='선1'></div>
          <div className='선2'></div>
          <div className='선3'></div>
          <div className='선4'></div>
          <div className='사진칸'>
            <img src="카메라.png" className="카메라" alt="4" />
          </div>
        </div>
        <div className='동그라미'>
          <p>이번여행 즐거우셨나요?</p>
        </div>
       </div>
       <div className="오른쪽파란박스">
        <p>오늘의 운세 보러가기</p>
       </div>
       <div className="메뉴1" onClick={toggleMenu}></div>
       <div className="메뉴2" onClick={toggleMenu}></div>
       <div className="메뉴3" onClick={toggleMenu}></div>
       <img src="오리.png" className="오리" alt="오리3" />
     {menuVisible && (
       <div className={`메뉴바 ${menuVisible ? 'show' : 'hide'}`}>
        <img src="꽃1.png" className="꽃1" alt="오리3" />
        <img src="꽃2.png" className="꽃2" alt="오리3" />
        <img src="꽃3.png" className="꽃3" alt="오리3" />
        <img src="톱니.png" className="톱니" alt="오리3" />
       </div>
     )}
      </div>
     </div>
    </div>
  );
}

export default App;
