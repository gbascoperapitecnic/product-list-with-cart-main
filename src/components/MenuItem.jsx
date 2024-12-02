import { ShoppingCart } from "lucide-react";
import { formatCurrency } from "../helpers";
import { useEffect } from "react";

export default function MenuItem({item, cart, addToCart, incrementQuantity, decrementQuantity}) {
  return (
    <div className="p-4 flex flex-col max-w-[100%]">
        <div>
            <img src={item.image.desktop} alt=""  className="w-full rounded-2xl"/>
            {
                item.quantity  ? (
                    <>
                        <button
                            className="rounded-full bg-darkRed mx-auto px-6 text-Rose50 py-2 relative bottom-5"
                        >
                            <div className="justify-between flex items-center gap-7">
                                <div className="rounded-full cursor-pointer" onClick={() => decrementQuantity(item)}>
                                    <img src="/public/images/icon-decrement-quantity.svg" alt="" />
                                </div>
                            
                                {item.quantity}
                            
                                <div className="rounded-full cursor-pointer" onClick={() => incrementQuantity(item)}>
                                    <img src="/public/images/icon-increment-quantity.svg" alt="" />
                                </div>

                            </div>
                        </button>
                    </>
                ): (
                    <>
                        <button
                            className="rounded-full border-darkRed border bg-Rose50 font-semibold mx-auto px-6 py-2 relative bottom-5 flex items-center gap-3"
                            onClick={() => addToCart(item)}
                        >
                            <ShoppingCart
                                className="text-darkRed"
                            />
                            Add to cart
                        </button>
                    </>
                )
            }
        </div>
        <div className="flex flex-col items-start px-2">
            <span className="text-Rose500">{item.category}</span>
            <span className="font-bold text-lg text-Rose900">{item.name}</span>
            <span className="text-darkRed font-bold">{formatCurrency(item.price)}</span>
        </div>
    </div>
  )
}

