import arrow from '../Images/Arrow.png';

function Arrowbutton({ onClick, style }) {
    return (
        <div style={{ ...style, cursor: "pointer" }} onClick={onClick}>
            <img src={arrow} alt="화살표" style={{ width: '5vw', maxWidth: '100%' }} />
        </div>
    );
}

export default Arrowbutton;