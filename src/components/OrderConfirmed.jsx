import { Modal } from "@material-ui/core";
import OrderConfirmedItem from "./OrderConfirmedItem";
import { formatCurrency } from "../helpers";

export default function OrderConfirmed({cart, setCart, open, handleOpen, handleClose}) {
  return (
    <Modal
        onClose={handleClose}
        open={open}
        className="flex justify-center items-center mx-auto max-w-[33rem]"
    >
        <div className="bg-Rose50 p-7 rounded-xl w-full flex flex-col gap-4">
            <div className="pb-3">
                <img src="/public/images/icon-order-confirmed.svg"></img>
                <h1 className="font-extrabold text-4xl mt-3 mb-2">Order Confirmed</h1>
                <p className="text-Rose500">We hope you enjoy your food!</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="bg-Rose100 rounded-md p-3 flex flex-col gap-4">
                    {
                        cart.map((item) =>
                            <OrderConfirmedItem 
                                key={item.id}
                                item={item}
                            />
                        )
                    }
                </div>

                <section className='flex justify-between py-5'>
                    <span className=''>Order Total</span>
                    <h3 className='text-2xl font-extrabold'>{formatCurrency( cart.reduce((total, item)=> total + item.price * item.quantity, 0))}</h3>
                </section>

                <button
                    className='bg-darkRed text-Rose50 p-4 rounded-full w-full font-redhat-semibold hover:bg-Rose900'
                    onClick={() => {
                        handleClose();
                        setCart([]);
                    }}
                >
                    Start New Order
                </button>
            </div>
        </div>
    </Modal>
  )
}
