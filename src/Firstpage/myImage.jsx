import firstImage from '../Images/Firstpage1.png';
import thirdImage from '../Images/Firstpage3.png';

function Myimage() {
  return (
    <div style={{
      position: 'relative',
      bottom: '0',
      right: '0'
    }}>
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '-1.4vw',
        marginBottom: '-50vw'
      }}>
        <img src={firstImage} alt="꽃" style={{ width: '18.2vw' }}/>
      </div>
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