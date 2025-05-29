import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import './TodayFortune.css';
import BackgroundImg from '../Images/Fortunepage-Background.png';
import FlowerDuck from '../Images/flowerduck.png';
import NormalDuck from '../Images/normalduck.png';
import SleepDuck from '../Images/sleepduck.png';
import UmbrellaDuck from '../Images/umbrelladuck.png';
import DotTypingWithCallback from './DotTypingWithCallback';
import arrow from '../Images/Homearrow.png'; // 화살표 이미지 import

function TodayFortune() {
    // 점 애니메이션 상태
    const [dotDone, setDotDone] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [showDots, setShowDots] = useState(false);
    const [showImg, setShowImg] = useState(false);
    
    const navigate = useNavigate(); // 추가
    const [isArrowHover, setIsArrowHover] = useState(false); // 화살표 hover 상태

    // 점(...)이 나타난 뒤 0.5초 후 이미지도 fade-in
    useEffect(() => {
        if (dotDone) {
            setShowDots(true);
            const timer = setTimeout(() => setShowImg(true), 500);
            return () => clearTimeout(timer);
        }
    }, [dotDone]);

    // 이미지 목록
    const images = [FlowerDuck, NormalDuck, SleepDuck, UmbrellaDuck];
    // 각 이미지에 대응하는 텍스트
    const fortuneTexts = [
        "오늘은 꽃길만 걷는 하루가 될 거예요!",
        "평범하지만 소소한 행복이 찾아올 거예요.",
        <>충분한 휴식이 필요한 하루예요.<br/>&emsp;&emsp;&emsp;푹 쉬세요!</>,
        "오늘은 조심하는게 좋겠어요.."
    ];

    // 점 애니메이션이 끝나면(3개) 이미지 랜덤 선택
    useEffect(() => {
        if (dotDone && !selectedImg) {
            const idx = Math.floor(Math.random() * images.length);
            setSelectedImg(images[idx]);
        }
    }, [dotDone, selectedImg, images]);

    // 스타일 정의
    const containerStyle = {
        position: "relative",
        maxWidth: "auto",
        minWidth: "15vw",
        width: "20vw",
        minHeight: "30vw",
        height: "43vw",
        display: "flex",
        justifyContent: "center", 
        alignItems: "flex-start",
        color: "black",
        fontSize: "2rem",
        margin: "0 auto",
        padding: "2rem",
        borderRadius: "2vw",
        border: "0.2vw solid black",
        overflow: "hidden",
        flexDirection: "column"
    };

    const BackgroundImgStyle = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: "-1",
        borderRadius: "2vw"
    };

    const textStyle = {
        fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif",
        fontSize: "2.4vw",
        marginTop: "9vw",
        marginLeft: "0vw",
        color: "#757575",
    };

    const imgStyle = {
        position: "absolute",
        bottom: "0",
        width: "23vw",
        margin: "2vw auto -2vw 20vw",
        display: "block",
        zIndex: 1
    };

    // 홈(화살표) 버튼 wrapper 스타일 (hover 효과용 클래스 추가)
  const arrowImgWrapperStyle = {
    position: "absolute",
    top: "1vw",
    left: "1vw",
    width: "2vw",
    height: "2vw",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s", // 부드러운 확대 효과
    cursor: "pointer"
  };

  // 홈(화살표) 버튼 배경 원 스타일
  const arrowImgContainerStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    background: "#FFFFFF",
    borderRadius: "50%",
    cursor: "pointer",
    border: "0.1vw solid #E0F1F6",
    transition: "transform 0.2s", // 부드러운 확대 효과
  };

  // 홈(화살표) 이미지 스타일
  const arrowImgStyle = {
    width: "70%",
    height: "70%",
    zIndex: 2,
    position: "relative",
    objectFit: "contain",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "transform 0.2s", // 부드러운 확대 효과
  };

    // 선택된 이미지에 맞는 텍스트 인덱스 구하기
    const selectedIdx = images.findIndex(img => img === selectedImg);

    return (
        // 운세 컨테이너
        <div style={containerStyle}>
            {/* 노치 */}
            <div
                style={{
                    position: "absolute",
                    top: "0vw",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "10vw",
                    height: "1.7vw",
                    background: "black",
                    borderRadius: "0 0 2vw 2vw",
                    zIndex: 10,
                    opacity: 0.85,
                }}
            />
            {/* 홈(화살표) 버튼 */}
            <div
                style={{
                    ...arrowImgWrapperStyle,
                    transform: isArrowHover ? "scale(1.12)" : "scale(1)",
                }}
                onMouseEnter={() => setIsArrowHover(true)}
                onMouseLeave={() => setIsArrowHover(false)}
                onClick={() => navigate('/Mainpage')}
            >
                <div
                    style={{
                        ...arrowImgContainerStyle,
                        transform: isArrowHover ? "scale(1.12)" : "scale(1)",
                    }}
                ></div>
                <img
                    src={arrow}
                    alt="홈으로"
                    style={{
                        ...arrowImgStyle,
                        transform: isArrowHover ? "scale(1.12)" : "scale(1)",
                    }}
                />
            </div>
            {/* 배경 이미지 */}
            <img src={BackgroundImg} alt="배경 이미지" style={BackgroundImgStyle}/>
            {/* "오늘의 운세는" 텍스트는 항상 표시 */}
            <div style={textStyle}>
                오늘의 운세는
                <span style={{ display: 'inline-block', minWidth: '2em', position: 'relative' }}>
                    {!dotDone && <DotTypingWithCallback onDone={() => setDotDone(true)} />}
                    {dotDone && (
                        <span className="fade-in show" style={{
                            position: 'absolute',
                            left: 0,
                            top: "-2.15vw",
                            width: '2em',
                            textAlign: 'left'
                        }}>
                        ...
                        </span>
                    )}
                </span>
            </div>
            <div style={{ height: '35vw', display: 'flex', justifyContent: 'center',
                alignItems: 'center', flexDirection: 'column', position: 'relative', 
                fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif" }}>
                {/* 운세 텍스트 */}
                {dotDone && selectedImg && (
                    <div
                        className={`fade-in${showImg ? ' show' : ''}`}
                        style={{
                            position: 'absolute',
                            top: '2vw',
                            left: '10vw',
                            transform: 'translateX(-50%)',
                            fontSize: '1.7vw',
                            padding: '4vw 10vw',
                            zIndex: 2,
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {fortuneTexts[selectedIdx]}
                    </div>
                )}
                {dotDone && selectedImg && (
                    <>
                        <img
                            src={selectedImg}
                            alt="오늘의 운세 오리"
                            style={imgStyle}
                            className={`fade-in${showImg ? ' show' : ''}`}
                        />
                    </>
                )}
            </div>
        </div>    
    );
}

export default TodayFortune;