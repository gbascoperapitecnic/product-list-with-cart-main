import { formatCurrency } from "../helpers";

export default function MenuItem({item, cart, addToCart, incrementQuantity, decrementQuantity}) {

    const element = cart.find((prod) => prod.id === item.id)
    const quantity = element ? item.quantity : 0

    return (
        <div className="p-4 flex flex-col max-w-[100%]">
            <div className="">
                {
                    quantity > 0 ? (
                        <>
                        <img src={item.image.desktop} alt=""  className="w-full rounded-xl border-darkRed border-2"/>
                            <div
                                className="rounded-full bg-darkRed mx-auto px-6 text-Rose50 relative bottom-6 inline-block py-3"
                            >
                                <div className="justify-between flex items-center gap-7">
                                    <div className="rounded-full cursor-pointer w-6 h-6 border flex justify-center items-center" onClick={() => decrementQuantity(item)}>
                                        <img src="/public/images/icon-decrement-quantity.svg" alt="" />
                                    </div>
                                
                                    {quantity}
                                
                                    <div className="rounded-full cursor-pointer w-6 h-6 flex justify-center items-center border" onClick={() => incrementQuantity(item)}>
                                        <img src="/public/images/icon-increment-quantity.svg" alt="" />
                                    </div>

                                </div>
                            </div>
                        </>
                    ): (
                        <>
                            <img src={item.image.desktop} alt=""  className="w-full rounded-xl"/>
                            <button
                                className="rounded-full border-darkRed border bg-Rose50 font-semibold mx-auto px-6 py-3 relative bottom-6 flex items-center gap-3"
                                onClick={() => addToCart(item)}
                            >
                                <img src="/public/images/icon-add-to-cart.svg" alt="" />
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