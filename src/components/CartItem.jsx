import { formatCurrency } from "../helpers";

export default function CartItem({item, removeItem}) {
  return (
    <>
        <div className="flex flex-col gap-1">
            <span className="font-semibold">{item.name}</span>
            <p className="flex gap-2">
                <span className="text-darkRed font-bold mr-3">{item.quantity}x</span>
                <span className="text-Rose400">@ {formatCurrency(item.price)}</span>
                <span className="text-Rose500 font-bold">{formatCurrency(item.price * item.quantity)}</span>
            </p>
        </div>
        <div>
            <button 
                className="rounded-full border p-1 border-Rose500 font-redhat-semibold hover:border-Rose900"
                onClick={()=> removeItem(item)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" stroke="" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
            </button>
        </div>
    </>
  )
}
