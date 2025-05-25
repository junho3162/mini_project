import Arrowbutton from './arrow';
import Myimage from './myImage';
import { useNavigate } from 'react-router-dom';

function Cover() {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate('/NAV');
  };

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

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    marginTop: "10vh"
  };

  const textWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    className: "text-wrapper",
    marginTop: "-10%"
  };

  const pStyle = {
    fontSize: "2vw",
    marginBottom: "-0.5%",
    color: "Lightgray",
    fontWeight: "100",
    marginLeft: "-14vw",
    fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif"
  };

  const h1Style = {
    fontSize: "7.5vw",
    maxWidth: "60vw",
    marginLeft: "3vw",
    color: "gray",
    fontWeight: "100",
    fontFamily: "'HakgyoansimChilpanjiugaeTTF-B', sans-serif"
  };

  return (
    <div style={{ position: "relative", width: "100vw", minHeight: "100vh" }}>
      <Arrowbutton onClick={handleArrowClick} style={{
        position: "absolute",
        right: "27vw",
        bottom: "21vw",
        zIndex: 10
      }} />
  
      <div style={containerStyle}>
        <div style={wrapperStyle}>
          <div style={textWrapperStyle}>
            <p style={pStyle}>여행을</p>
            <h1 style={h1Style}>담다</h1>
          </div>
        </div>
        <Myimage />
      </div>
    </div>
  );
}

export default Cover;