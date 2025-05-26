import Arrowbutton from './arrow'; // 화살표 버튼 컴포넌트 import
import Myimage from './myImage';    // 이미지 컴포넌트 import
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 import

function Cover() {
  const navigate = useNavigate(); // 페이지 이동 함수 생성

  // 화살표 클릭 시 /NAV로 이동
  const handleArrowClick = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/페이지넘기는소리1.mp3');
    audio.play();

    navigate('/NAV');
  };

  // 메인 컨테이너 스타일
  const containerStyle = {
    position: "relative",
    background: "linear-gradient(to bottom,#B8ECFB,#F4FBFD,#C9E6C4)",
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
    //boxSizing: "border-box"
  };

  // 내부 스타일
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    marginTop: "10vh"
  };

  // 텍스트 스타일
  const textWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    className: "text-wrapper",
    marginTop: "-10%"
  };

  // p 태그 스타일
  const pStyle = {
    fontSize: "2vw",
    marginBottom: "-0.5%",
    color: "Lightgray",
    fontWeight: "100",
    marginLeft: "-14vw",
    fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif"
  };

  // h1 태그 스타일
  const h1Style = {
    fontSize: "7.5vw",
    maxWidth: "60vw",
    marginLeft: "3vw",
    color: "gray",
    fontWeight: "100",
    fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif"
  };

  return (
    // 전체 페이지를 감싸는 div
    <div style={{ position: "relative", width: "100vw", minHeight: "100vh" }}>
      {/* 오른쪽 가운데 위치한 화살표 버튼 */}
      <Arrowbutton onClick={handleArrowClick} style={{
        position: "absolute",
        right: "27vw",
        bottom: "21vw",
        zIndex: 10
      }} />
  
      {/* 메인 컨테이너 */}
      <div style={containerStyle}>
        <div style={wrapperStyle}>
          <div style={textWrapperStyle}>
            <p style={pStyle}>여행을</p>
            <h1 style={h1Style}>담다</h1>
          </div>
        </div>
        {/* 메인 이미지 컴포넌트 */}
        <Myimage />
      </div>
    </div>
  );
}

export default Cover;