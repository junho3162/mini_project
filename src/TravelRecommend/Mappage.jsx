import { useState } from "react";
import arrow from '../Images/Homearrow.png'; 
import MapComponent from './Mapcomponent'; // 지도 컴포넌트 import
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 import

function Map() { // 메인 컴포넌트
  const [selected, setSelected] = useState(null);  
  const [showBoxes, setShowBoxes] = useState(false); // 박스 표시 여부 상태
  const [isArrowHover, setIsArrowHover] = useState(false); // 화살표 호버 상태
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이터 슉슉슉슉

  // 핸드폰 전체 컨테이너 스타일
  const containerStyle = {
    position: "relative",
    maxWidth: "300vw",
    minWidth: "0vw",
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
  // 아이폰 노치 스타일
  const nocheStyle = {
    position: "absolute",
    top: "0vw",
    left: "50%",
    transform: "translateX(-50%)",
    width: "10vw",
    height: "1.7vw",
    background: "black",
    borderRadius: "0 0 2vw 2vw",
    zIndex: 10,
  };

  // 지도 영역 스타일
  const mapStyle = {
    borderRadius: "1.9vw",
    overflow: "hidden",
    width: "140%",      
    height: "120%",     
    marginLeft: "-8.3%", 
    marginRight: "-8.3%",
    marginTop: "-23%",
    // position: "relative",
  };

  // 작은 박스 스타일
  const smallboxStyle = {
    position: "absolute",
    width: "12vw",
    height: "8vw",
    left: "0.5vw",
    top: "27vw",
    background: "#E0F1F6",
    borderRadius: "2.7vw",
    border: "solid #E0F1F6 5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: showBoxes ? 1 : 0, 
    transform: showBoxes ? "translateY(0)" : "translateY(30px)", 
    transition: "opacity 0.5s, transform 0.5s",
    // cursor: "pointer", 
  };

  // 큰 박스 스타일
  const bigboxStyle = {
    position: "absolute",
    width: "22.4vw",
    height: "10vw",
    left: "0.5vw",
    top: "36vw",
    background: "#E0F1F6",
    borderRadius: "2.7vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: showBoxes ? 1 : 0,
    transform: showBoxes ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.5s, transform 0.5s"
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

  // 홈 버튼 클릭 시 메인(홈)으로 이동
  const handleArrowClick = () => {
        navigate(''); //재민님이 만드신 홈화면 루트패스 경로를 navigate에다가 삽입
    };

  // 애니메이션 트리거
  const handleLocationClick = (loc) => { // 마커 클릭 시 ShowBoxes가 true가 되어 나타남 슉슉
    setSelected(loc);
    setShowBoxes(false);
    setTimeout(() => setShowBoxes(true), 50); // 트랜지션 재생을 위해 약간의 딜레이
  };

  // 지도 영역 클릭 시 박스 숨김
  const handleMapClick = () => {
    setShowBoxes(false); 
    setTimeout(() => setSelected(null), 500); // 애니메이션 후 box 제거(시각적으로 보기 편함을 제공하지 않을까 싶어서 했어요..)
  };

  return (
    <div style={containerStyle}> {/* 핸드폰 스타일 적용 */}
      <div style={nocheStyle}></div> {/* 노치 스타일 적용 */}
        <div style={mapStyle}> {/* 구글 지도 적용 */}
          <MapComponent
            onLocationClick={handleLocationClick}
            onMapClick={handleMapClick}
          />
          {/* 홈(화살표) 버튼 */}
          <div
            style={{
              ...arrowImgWrapperStyle,
              transform: isArrowHover ? "scale(1.12)" : "scale(1)",
            }}
            onMouseEnter={() => setIsArrowHover(true)}
            onMouseLeave={() => setIsArrowHover(false)}
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
              onClick={handleArrowClick}
              style={{
                ...arrowImgStyle,
                transform: isArrowHover ? "scale(1.12)" : "scale(1)",
              }}
            />
          </div>
          {/* 위치 선택 시 정보 박스 표시 */}
          {selected && (
            <>
              <div style={smallboxStyle}>
                <img
                  src={selected.img}
                  alt={selected.name}
                  style={{ width: "12vw", borderRadius: "2.47vw", height: "8vw" }}
                  // onClick={() => window.open(selected.img, "_blank")}
                />
              </div>
              <div style={bigboxStyle}>
                <a
                  href={selected.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black", fontWeight: "bold", fontSize: "1.2vw", fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif"}}
                >
                  {selected.blogTitle}
                </a>
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default Map;