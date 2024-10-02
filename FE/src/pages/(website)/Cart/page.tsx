import { MdDelete } from "react-icons/md"


const CartPage = () => {
  return (
    <>
      <main className="max-w-screen-xl m-auto">
        <section className="grid grid-cols-12 gap-8">
            <div className="col-span-8 ">
            <table className="w-full">
                <thead className=" bg-neutral-100 ">
                    <tr className="*:p-4">
                        <th className="text-left pl-4 ">Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center *:pt-4 *:font-semibold">
                        <td className="!text-left"> <img src="https://picsum.photos/id/1/77/77" alt="" className="inline mr-4" /><span className="text-neutral-400">Asgaard sofa</span></td>
                        <td  className="text-neutral-400">25.000.000đ</td>
                        <td>1</td>
                        <td>25.000.000đ</td>
                        <td>
                            <button className="text-[21px] text-red-500"><MdDelete /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div  className="col-span-4 bg-neutral-100">
                <div className=" m-8">
                    <h3 className="text-[24px] font-bold">Cart Total</h3>
                    <div className="pt-4 pb-5">
                    <hr className="border-neutral-400"/>
                    </div>
                    <div className="flex justify-between *:font-semibold pb-4">
                        <span>Subtotal</span>
                        <span className="text-neutral-400">25.000.000đ</span>
                    </div>
                    <div className="flex justify-between *:font-semibold items-center pb-8">
                        <span>Total</span>
                        <span className="text-[20px] text-red-500 ">25.000.000đ</span>
                    </div>
                    <a href="/payment" className="border border-solid border-yellow-600 w-full  inline-block text-center text-yellow-600 font-semibold py-2 hover:bg-yellow-500 hover:text-white">Checkout</a>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default CartPage
