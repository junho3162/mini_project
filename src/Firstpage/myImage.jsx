import firstImage from '../Images/Firstpage1.png';   // 첫 번째 이미지 import
import thirdImage from '../Images/Firstpage3.png';   // 세 번째 이미지 import

// Myimage 컴포넌트
function Myimage() {
  return (
    // 전체 이미지를 감싸는 div (relative로 기준 설정)
    <div style={{
      position: 'relative',
      bottom: '0',
      right: '0'
    }}>
      {/* 첫 번째 이미지(꽃) - 아래에 배치 */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '-1.4vw',
        marginBottom: '-50vw'
      }}>
        <img src={firstImage} alt="꽃" style={{ width: '18.2vw' }}/>
      </div>
      {/* 세 번째 이미지(병아리) - 꽃 위에 배치 */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '-8vw',
        marginBottom: '-46vw'
      }}>
        <img src={thirdImage} alt="병아리" style={{ width: '26vw' }} />
      </div>
    </div>
  );
}

export default Myimage;