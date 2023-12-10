import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Store from "../pages/Store";

function Main() {
    return (
        <main className="flex justify-center m-10">
            <Routes>
                <Route path="/" element={<Store />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
}

export default Main;
