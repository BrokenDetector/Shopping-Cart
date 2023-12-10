import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { ShoppingCartProvider } from "./context/useShoppingCartContext";

function App() {
    return (
        <BrowserRouter>
            <ShoppingCartProvider>
                <Header />
                <Main />
                <Footer />
            </ShoppingCartProvider>
        </BrowserRouter>
    );
}

export default App;
