import gearImg from '../Images/gear.png';
import './NAVPage.css';
import { useNavigate } from 'react-router-dom';

function NAVPage() {
    const navigate = useNavigate();

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

    const gearImgStyle = {
        position: "absolute",
        width: "8%",
        height: "4%",
        top: "5%",      
        right: "10%",    
        cursor: "pointer",
    };

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

    const handleGearClick = () => {
        navigate('/User');
    };

    const handleBox1Click = () => {
        navigate('/TodaysFortune'); {/* 클릭시 TodayFortune 페이지로 이동*/}
    };

    return (
        <div style={containerStyle}>
            <div style={gearBgStyle}></div>
            <img src={gearImg} alt="설정" style={gearImgStyle} className="gear-rotate" onClick={handleGearClick}/>
            <div style={boxStyle1} alt="오늘의 운세" className="box-animate" onClick={handleBox1Click}>
                <h4>오늘의 운세 보러가기</h4>
                </div>
                {/* box2와 box3 버튼 클릭 시 경로 추가 아직 안함 */}
            <div style={boxStyle2} className="box-animate">
                <h4>기록 확인</h4>
            </div>
            <div style={boxStyle3} className="box-animate"> 
                <h4>추천 여행지 보러가기</h4>
                </div>
        </div>
    );
}

export default NAVPage;