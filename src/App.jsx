import './App.css'
import MenuItem from './components/MenuItem'
import data from './data/data.json'
import CartItem from './components/CartItem'
import { formatCurrency } from './helpers'
import OrderConfirmed from './components/OrderConfirmed'
import useCart from './hooks/useCart'

function App() {

  const { cart, setCart, open, handleOpen, handleClose, isEmpty, addToCart, removeItem, incrementQuantity, decrementQuantity} = useCart()
  
  return (
    <>
      <h1 className='text-4xl font-bold text-left p-4'>Desserts</h1>
      
      <section className='grid lg:grid-cols-4 sm:grid-cols-1'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:col-span-3 sm:col-span-4 mt-5'>
          {
            data.map((item) => 
              <MenuItem 
                key={item.id}
                item={item}
                cart={cart}
                addToCart={addToCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}

              />
              
            )
          }        
        </div>

        <div className='bg-green-500 rounded-2xl p-6 shadow-sm bg-[white] min-w-full'>
          <h2 className='text-darkRed text-left text-3xl font-redhat-semibold'>Your Cart ({cart.length})</h2>
          <div className='mt-3'>
            {
              isEmpty ? (
                <>
                  <img src="/public/images/illustration-empty-cart.svg" alt="" className='mx-auto'/>
                  <p>Your added items will appear here</p>
                </>

              ): (
                cart.map((item)=> 
                  <div key={item.id} className="border-b-Rose100 border-b-[1px] w-100 text-start py-4 flex justify-between items-center">
                    <CartItem 
                      item={item}
                      removeItem={removeItem}
                    />
                  </div>
                )
              )
            }
          </div>
          
          {!isEmpty && 
            <>
              <section className='flex justify-between py-5'>
                <span className=''>Order Total</span>
                <h3 className='text-2xl font-extrabold'>{formatCurrency( cart.reduce((total, item)=> total + item.price * item.quantity, 0))}</h3>
              </section>

              <div className='flex flex-col gap-4'>
                <div className='bg-Rose50 rounded-md p-4 flex items-center justify-center gap-2'>
                  <img src='/public/images/icon-carbon-neutral.svg'></img>
                  <p>
                    This is a <span className='font-bold'>carbon-neutral</span> delivery
                  </p>
                </div>

                <button
                  className='bg-darkRed text-Rose50 p-4 rounded-full w-full font-redhat-semibold hover:bg-Rose900 transition-all'
                  onClick={handleOpen}black
                >
                  Confirm Order
                </button>

                <OrderConfirmed
                  cart={cart}
                  setCart={setCart}
                  open={open}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                />

              </div>
            </>          
          }
        </div>
      </section>
      
    </>
  )
}

export default App
