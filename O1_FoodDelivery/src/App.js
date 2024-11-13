import React from "react"
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const AppLayout = () => {
    return (
        <div id="app">
            {/* Header */}
            <Header/>
            {/* Body */}
            <Body/>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
