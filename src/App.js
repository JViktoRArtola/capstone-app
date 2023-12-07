import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import Reservations from "./pages/Reservations/Reservations";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="menu" element={<Menu/>}/>
                <Route path="reservations" element={<Reservations/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;
