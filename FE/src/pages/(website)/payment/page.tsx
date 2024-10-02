

const PayPage = () => {
  return (
    <>
    <main className="max-w-screen-xl m-auto pt-14">
        <h2  className=" text-[40px] pb-8 font-bold">Billing details</h2>
            <form >
        <section className="grid grid-cols-12 gap-8">
           <div className="col-span-6">
                 <div className="grid grid-cols-12  gap-8 pb-8">
                    <div className="col-span-6 " >
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" className=" border-2 border-solid block w-full p-2 mt-2  "/>
                    </div>
                    <div className="col-span-6">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" className=" border-2 border-solid block w-full p-2 mt-2 "/>
                    </div>
                 </div>
                 <div className=" pb-8">
                    <label htmlFor="">Company Name (Optional)</label>
                    <input type="text" name="" id="" className=" border-2 border-solid block w-full p-2 mt-2 "/>
                </div>
                 <div className="pb-8">
                    <label htmlFor="">Country / Region</label>
                    <select name="" id="" className=" border-2 border-solid block w-full p-2 mt-2 text-neutral-400">
                        <option value="">Sri Lanka</option>
                        <option value="">Viet Nam</option>
                    </select>
                </div>
                <div  className=" pb-8">
                    <label htmlFor="">Street address</label>
                    <input type="text" name="" id="" className=" border-2 border-solid block w-full p-2 mt-2 "/>
                </div>
                <div  className=" pb-8">
                    <label htmlFor="">Town / City</label>
                    <input type="text" name="" id="" className=" border-2 border-solid block w-full p-2 mt-2 "/>
                </div>
                <div  className=" pb-8">
                    <label htmlFor="">Province</label>
                    <select name="" id="" className=" border-2 border-solid block w-full p-2 mt-2  text-neutral-400 ">
                        <option value="">Western Province</option>
                        <option value="">Ha Noi</option>
                    </select>
                </div>
                
                <div  className=" pb-8">
                    <label htmlFor="">ZIP code</label>
                    <input type="number" name="" id="" className=" border-2 border-solid block w-full p-2 mt-2 "/>
                </div>
                <div  className=" pb-8">
                    <label htmlFor="">Phone</label>
                    <input type="number" name="" id="" className=" border-2 border-solid block w-full p-2 mt-2 "/>
                </div>
                <div  className=" pb-16">
                    <label htmlFor="">Email address</label>
                    <input type="email" name="" id="" className=" border-2 border-solid block w-full p-2 mt-2 "/>
                </div>
                

            
           </div>
           <div className="col-span-6">
           <div >
              <div className="flex justify-between *:text-[24px] *:font-bold pb-4">
                    <h3 >Product</h3>
                    <h3 >Subtotal</h3>
                    </div>
                    <div className="flex justify-between *:font-semibold pb-4">
                        <span className="text-neutral-400">Asgaard sofa <strong className="font-medium text-black">X1</strong></span>
                        <span >25.000.000đ</span>
                    </div>
                    <div className="flex justify-between *:font-semibold pb-5">
                        <span>Subtotal</span>
                        <span>25.000.000đ</span>
                    </div>
                    <div className="flex justify-between items-center pb-8">
                        <span className="font-semibold" >Total</span>
                        <span className="text-[20px] text-yellow-600 font-bold">25.000.000đ</span>
                    </div>
                    <div className="pb-8">
                    <hr className="border-neutral-400"/>
                    </div>
                    <div className="pb-2 *:text-neutral-400 *:p-2 *:hover:text-black">
                        <input type="radio" name="paymentMethod" id="bankTransfer"  />
                        <span >Direct Bank Transfer</span>
                    </div>
                    <p className="pb-4 text-neutral-400">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    <div className="pb-4 *:text-neutral-400 *:p-2 *:hover:text-black">
                        <input type="radio" name="paymentMethod" id="atmTransfer" />
                        <span >ATM Bank Transfer</span>
                    </div>
                    <div className="pb-8 *:text-neutral-400 *:p-2 *:hover:text-black">
                        <input type="radio" name="paymentMethod" id="cashOnDelivery" />
                        <span>Cash On Delivery</span>
                    </div>
                    <p className="pb-8 ">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy</span>.</p>
                    <div className="text-center">
                    <a href="/payment" className="border border-solid border-yellow-600 w-1/2 inline-block text-center text-yellow-600 font-semibold py-2 hover:bg-yellow-500 hover:text-white *:">Place order</a>
                    </div>
                </div>
           </div>
        </section>
        </form>
    </main>
    </>
  )
}

export default PayPage
