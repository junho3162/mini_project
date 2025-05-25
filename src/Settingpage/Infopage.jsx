import './Infopage.css';

// 사용자 정보 입력 페이지 컴포넌트
function SetInfo() {
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
        backgroundColor: "#c7e5ef",
    };

    // 원형(프로필 사진 영역) 스타일
    const circleStyle = {
        position: "relative",
        width: "14vw",
        height: "14vw",       
        marginTop: "2vw",
        borderRadius: "50%",    
        backgroundColor: "#9ECEF5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        // 메인 컨테이너
        <div style={containerStyle}>
            {/* 프로필 사진 영역 */}
            <div style={circleStyle}>
                <p>사진</p>
            </div>
        </div>
    );
}

export default SetInfo;