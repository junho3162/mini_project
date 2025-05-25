import BackgroundImg from '../Images/Fortunepage-Background.png'; // 배경 이미지 import
import DotTyping from './DotTyping'; // 점 애니메이션 컴포넌트 import

function TodayFortune() {
    // 메인 컨테이너 스타일
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
    };

    // 배경 이미지 스타일
    const BackgroundImgStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: "-1",
        borderRadius: "2vw"
    };

    // 텍스트 스타일
    const textStyle = {
        fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif",
        fontSize: "2.4vw",
        marginTop: "9vw",
        marginLeft: "-5vw",
        color: "#757575",
    };

    return (
        // 운세 컨테이너
        <div style={containerStyle}>
            {/* 배경 이미지 */}
            <img src={BackgroundImg} alt="배경 이미지" style={BackgroundImgStyle}/>
            {/* 점 애니메이션 */}
            <div style={textStyle}>오늘의 운세는<DotTyping/></div>
        </div>    
    );
}

export default TodayFortune;