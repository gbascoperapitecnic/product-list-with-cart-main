import { formatCurrency } from "../helpers";

export default function OrderConfirmedItem({item}) {
  return (
    <div className="border-b-Rose500  pb-4 border-opacity-10 border-b-[1px] p-2">  
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img src={item.image.thumbnail} alt="" className="max-w-14 rounded-md"/>
                <div>
                    <span className="font-semibold">{item.name}</span>
                    <p className="flex gap-2">
                        <span className="text-darkRed font-bold mr-3">{item.quantity}x</span>
                        <span className="text-Rose400">@ {formatCurrency(item.price)}</span>
                    </p>
                </div>
            </div>
            <span className="text-Rose900 font-bold">{formatCurrency(item.price * item.quantity)}</span>
        </div>
    </div>
  )
}
