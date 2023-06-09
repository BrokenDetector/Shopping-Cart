import { useShoppingCart } from "../context/useShoppingCartContext";
import items from "../data/items.json";

function Store() {
    const { getItemQuantity, increaseCartQuantity } = useShoppingCart();

    return (
        <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-3">
            {items.map((item) => {
                return (
                    <div key={item.id} className="bg-white rounded-xl drop-shadow-lg my-5 p-5 grid grid-rows-1 items-center text-center">
                        <div>
                            <h2 className="font-bold text-xl">{item.name}</h2>
                            <img src={item.imgUrl} className="my-3" />
                            <h3>{item.price} $</h3>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-lime-500 my-4 p-2 px-8 rounded-lg" onClick={() => increaseCartQuantity(item.id)}>
                                + Add to Cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Store;
