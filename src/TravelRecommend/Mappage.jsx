
function Map() {
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
        backgroundColor: "#c7e5ef",
    };

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
        opacity: 0.85,
    };
  return (
    <div style={containerStyle}>
      <div style={nocheStyle}>
        <p>여행지 추천 맵 페이지입니다.</p>
      </div>
    </div>
  );
}

export default Map;