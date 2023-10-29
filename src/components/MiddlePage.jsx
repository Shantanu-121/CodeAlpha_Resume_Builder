import React from "react";
import Button from '@mui/material/Button';
import $ from 'jquery';


function MidddlePage() {
    const [state, setState] = React.useState(false);
    function setTransition() {
        setState(true);
    }
    function removeTransition() {
        setState(false);
    }
    function goBottom() {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }

    return <div className="middlePage">
        <img src="https://e-resume.vercel.app/resume.webp" onMouseOver={setTransition} onMouseOut={removeTransition} style={{ transform: state ? "scale(1.25) translateZ(0px)" : "none" }} ></img>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "50px", fontWeight: "bolder", marginLeft: "20px", marginBottom: "5px", fontFamily: "Montserrat , sansSerif", color: "grey" }}>Simplest way to Build a </span>
        <span style={{ marginLeft: "20px", fontSize: "40px", fontWeight: "bolder", color: "black" }}><h1>Professional Resume</h1></span>
        <span style={{ marginLeft: "20px", marginBotton: "5px", fontWeight: "bolder", fontSize: "30px", color: "grey" }}>|"The secret to getting ahead is getting started" -Mark Twain</span>
            <Button onClick={goBottom} variant="contained" style={{ backgroundColor: "black", width: "max-content", margin: "20px", color: "#fff", fontWeight: "bold" }}>Build a Resume</Button><span style={{ marginLeft: "20px", fontWeight: "bold", color: "grey" }}>Desktop screen recommended</span></div>
    </div>
}

export default MidddlePage;