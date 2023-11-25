import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cartSlice";
import { ProductsSummaryCard } from "./ProductSummaryCard.jsx";

export const ProductsSummary = () => {
    const cart = useSelector(cartProducts);

    return (
        <div className="flex flex-col">
            { cart && cart?.map((product, index) => {
                return (
                    <ProductsSummaryCard product={product} key={index} />
                )
            })}
        </div>
    )
}