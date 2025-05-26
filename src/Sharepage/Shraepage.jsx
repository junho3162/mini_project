

function Sharepage() {

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

    return (
        <div style={containerStyle}>
            안녕하세요
        </div>
    );
}

export default Sharepage;