import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
    const [renderBall, setRenderBall] = useState(false);
    const [posi, setPosi] = useState(0);
    const [ballPosition, setBallPosition] = useState({ left: "0px" });

    const buttonClickHandler = () => {
        setRenderBall(true);
    };

  

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
                setPosi(prevPosi => prevPosi + 5);
                setBallPosition({ left: posi + "px" });
            } 
        };
    
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [posi]);

    // const renderBallOrButton = () => {
    //     if (renderBall) {
    //         return <div className="ball" style={ballPosition}></div>;
    //     } else {
    //         return <button onClick={buttonClickHandler}>Start</button>;
    //     }
    // };

    return (
        <div className="playground">
            {renderBall?<div className="ball" style={ballPosition}></div>: <button className="start" onClick={buttonClickHandler}>Start</button>}
        </div>
    );
};

export default App;
