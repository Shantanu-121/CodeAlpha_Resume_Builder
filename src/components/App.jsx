import React from "react";
import Heading from "./Heading";
import Form from "./form";
import Footer from "./Footer";
import MiddlePage from "./MiddlePage";
import AboutUs from "./AboutUs";


function App() {
    return (
        <div>
            <Heading />
            <MiddlePage />
            <AboutUs />
            <Form />
            <Footer />
        </div>
    );
}


export default App;