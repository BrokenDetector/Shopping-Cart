import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/useShoppingCartContext";

function Header() {
    const { cartQuantity } = useShoppingCart();

    return (
        <header className="flex justify-between p-7 bg-black h-fit text-white">
            <Link className="text-3xl font-bold hover:text-lime-400 duration-100" to="/">
                FakeKeyStore
            </Link>
            <div className="flex items-center gap-4 text-xl">
                <NavLink to="/" className="hover:text-lime-400 duration-100">
                    Keys
                </NavLink>
                <NavLink to="/cart" className="hover:text-lime-400 duration-100 flex">
                    Cart <p className="text-xs text-lime-400 ml-1">{cartQuantity}</p>
                </NavLink>
                <NavLink to="/about" className="hover:text-lime-400 duration-100">
                    About
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
