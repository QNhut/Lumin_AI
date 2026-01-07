import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Capabilities from "./pages/Capabilities"
import Solutions from "./pages/Solutions"
import Learn_Discover from "./pages/Learn_Discover"
import Pricing from "./pages/Pricing"
import Request from "./pages/Request"

function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/products" element= {<Products />} />
                <Route path="/capabilities" element = {<Capabilities />} />
                <Route path="/solutions" element = {<Solutions />} />
                <Route path="/learn_Discover" element = {<Learn_Discover />} />
                <Route path="/pricing" element = {<Pricing />} />
                <Route path="/request" element = {<Request />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
