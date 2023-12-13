import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
    const [renderBall, setRenderBall] = useState(false);
    const [posi, setPosi] = useState(0);
    const [ballPosition, setBallPosition] = useState({ left: "0px" });

    const buttonClickHandler = () => {
        setRenderBall(true);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            setPosi(prevPosi => prevPosi + 5);
        } 
    };

    useEffect(() => {
        setBallPosition({ left: posi + "px" });
    }, [posi]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const renderBallOrButton = () => {
        if (renderBall) {
            return <div className="ball" style={ballPosition}></div>;
        } else {
            return <button onClick={buttonClickHandler}>Start</button>;
        }
    };

    return (
        <div className="playground">
            {renderBallOrButton()}
        </div>
    );
};

export default App;
