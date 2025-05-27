import { useEffect, useState } from 'react';
import './TodayFortune.css';
import BackgroundImg from '../Images/Fortunepage-Background.png'; // 배경 이미지 import
import FlowerDuck from '../Images/flowerduck.png';
import NormalDuck from '../Images/normalduck.png';
import SleepDuck from '../Images/sleepduck.png';
import UmbrellaDuck from '../Images/umbrelladuck.png';
import DotTypingWithCallback from './DotTypingWithCallback'; // 분리한 컴포넌트 import

function TodayFortune() {
    // 점 애니메이션 상태
    const [dotDone, setDotDone] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [showDots, setShowDots] = useState(false);
    const [showImg, setShowImg] = useState(false);

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
        bottom: "0vw",
        width: "23.4vw",
        margin: "2vw auto 0 20vw",
        display: "block",
        zIndex: 1
    };

    return (
        // 운세 컨테이너
        <div style={containerStyle}>
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
            <div style={{ height: '35vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {dotDone && selectedImg && (
                    <>
                        <img
                            src={selectedImg}
                            alt="오늘의 운세 오리"
                            style={imgStyle}
                            className={`fade-in${showImg ? ' show' : ''}`}
                        />
                        {/* 네이버 운세 안내 문구 및 링크 */}
                        <div style={{ marginTop: '-15vw', textAlign: 'center' }}>
                            <span
                                className={`fade-in${showImg ? ' show' : ''}`}
                                style={{
                                    color: '#757575',
                                    fontSize: '1.2vw',
                                    fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif"
                                }}
                            >
                                {/* 더 자세한 운세가 궁금하다면&nbsp; */}
                                {/* <a
                                    href="https://m.search.naver.com/search.naver?where=m&sm=mtp_hty.top&query=%EC%98%A4%EB%8A%98%EC%9D%98%20%EC%9A%B4%EC%84%B8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#1e90ff', textDecoration: 'underline', fontWeight: 'bold' }}
                                >
                                    네이버 오늘의 운세 바로가기 */}
                                {/* </a> */}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>    
    );
}

export default TodayFortune;