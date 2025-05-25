import arrow from '../Images/Arrow.png';

// 화살표 버튼 컴포넌트
// props: onClick(클릭 이벤트), style(커스텀 스타일)
function Arrowbutton({ onClick, style }) {
    return (
        // style과 커서 포인터 적용, 클릭 시 onClick 실행
        <div style={{ ...style, cursor: "pointer" }} onClick={onClick}>
            {/* 화살표 이미지 출력 */}
            <img src={arrow} alt="화살표" style={{ width: '5vw', maxWidth: '100%' }} />
        </div>
    );
}

export default Arrowbutton;