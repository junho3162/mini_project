import gearImg from '../Images/gear.png'; // 톱니바퀴 이미지 import
import './NAVPage.css'; // 스타일시트 import
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅 import

function NAVPage() {
    const navigate = useNavigate(); // 페이지 이동 함수 생성

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
        overflow: "visible",
    };

    // 톱니바퀴 배경 스타일
    const gearBgStyle = {
        position: "absolute",
        width: "87.5%",
        height: "85%",
        top: "12%",      
        left: "6.2%",    
        backgroundColor: "rgba(235, 247, 250, 0.55)",
        borderRadius: "0.52vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    // 톱니바퀴 이미지 스타일
    const gearImgStyle = {
        position: "absolute",
        width: "8%",
        height: "4%",
        top: "5%",      
        right: "10%",    
        cursor: "pointer", // 마우스 올릴 때 포인터 모양 커서
    };

    // 첫 번째 박스 스타일 (오늘의 운세)
    const boxStyle1 = {
        position: "absolute",
        width: "74%",
        height: "22%",
        left: "13%",
        top: "16%",
        background:" #E0F1F6",
        borderRadius: "2vw",
        fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    };

    // 두 번째 박스 스타일 (기록 확인)
    const boxStyle2 = {
        position: "absolute",
        width: "74%",
        height: "22%",
        left: "13%",
        top: "44%",
        background:" #E0F1F6",
        borderRadius: "2vw",
        fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    };

    // 세 번째 박스 스타일 (추천 여행지)
    const boxStyle3 = {
        position: "absolute",
        width: "74%",
        height: "22%",
        left: "13%",
        top: "72%",
        background:" #E0F1F6",
        borderRadius: "2vw",
        fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    };

    // 톱니바퀴 클릭 시 /User(Infopage)로 이동
    const handleGearClick = () => {
        navigate('/User');
    };

    // box1 클릭 시 /TodaysFortune으로 이동
    const handleBox1Click = () => {
        navigate('/TodaysFortune'); // 클릭시 TodayFortune 페이지로 이동
    };

    const handleBox3Click = () => {
        navigate('/Mappage'); 
    };

    return (
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
            {/* 톱니바퀴 배경 */}
            <div style={gearBgStyle}></div>
            {/* 톱니바퀴 이미지 (클릭 시 /User로 이동) */}
            <img src={gearImg} alt="설정" style={gearImgStyle} className="gear-rotate" onClick={handleGearClick}/>
            {/* 오늘의 운세 박스 (클릭 시 /TodaysFortune 이동) */}
            <div style={boxStyle1} alt="오늘의 운세" className="box-animate" onClick={handleBox1Click}>
                <h4>오늘의 운세 보러가기</h4>
            </div>
            {/* 기록 확인 박스 */}
            <div style={boxStyle2} className="box-animate">
                <h4>기록 확인</h4>
            </div>
            {/* 추천 여행지 박스 */}
            <div style={boxStyle3} alt="추천 여행지 페이지" className="box-animate" onClick={handleBox3Click}> 
                <h4>추천 여행지 보러가기</h4>
            </div>
        </div>
    );
}

export default NAVPage;