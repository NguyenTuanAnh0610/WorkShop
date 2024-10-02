import { IoMdStar } from "react-icons/io";

const ProductDetailPage = () => {
  return (
    <>
      <main className="max-w-screen-xl m-auto mt-16">
        <section>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-1 *:pb-4">
              <img src="https://picsum.photos/id/1/77/77" alt="" />
              <img src="https://picsum.photos/id/1/77/77" alt="" />
              <img src="https://picsum.photos/id/1/77/77" alt="" />
              <img src="https://picsum.photos/id/1/77/77" alt="" />
              <img src="https://picsum.photos/id/1/77/77" alt="" />
            </div>
            <div className="col-span-5 w-full">
              <img src="https://picsum.photos/id/1/620/600" alt="" />
            </div>
            <div className="col-span-6">
              <div>
                <h3 className="text-[22px] font-semibold pb-2">Asgaard sofa</h3>
                <span className="text-[42px] font-bold text-red-500  pb-2">25.000.000đ</span>
                <div className="flex items-center pb-4">
                  <div className=" flex border-r-2 border-solid pr-4 border-gray-300 text-[22px] text-yellow-400">
                  <IoMdStar />
                  <IoMdStar />  
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  </div>
                  <p className="pl-4 text-[16px] text-[#A3A3A3] font-medium">5 Customer Review</p>
                </div>
                <p className="font-medium text-[18px] pb-4">
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound w.
                </p>
                <div className="pb-4">
                  <h4  className=" text-[18px] text-neutral-400">Size</h4>
                  <div className="flex gap-4 text-white text-[15px]">
                    <div className="bg-neutral-400 rounded-lg hover:bg-yellow-500  w-[40px] h-[40px] flex justify-center items-center">L</div>
                    <div className="bg-neutral-400 rounded-lg hover:bg-yellow-500  w-[40px] h-[40px] flex justify-center items-center">XL</div>
                    <div className="bg-neutral-400 rounded-lg hover:bg-yellow-500  w-[40px] h-[40px] flex justify-center items-center">XS</div>
                  </div>
                </div>
                <div className="pb-8">
                  <h4 className=" text-[18px] text-neutral-400">Color</h4>
                  <div className="flex gap-4  ">
                    <div className="bg-[#816DFA] w-[40px] h-[40px] rounded-full"></div>
                    <div className="bg-black w-[40px] h-[40px] rounded-full"></div>
                    <div className="bg-[#B88E2F] w-[40px] h-[40px] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <form action="">
                    <div className="border border-solid border-neutral-400 w-fit rounded inline-block">
                      <button className="py-2 px-6">-</button>
                      <input
                        type="text"
                        value="1"
                        className="w-[30px] text-center"
                      />
                      <button className="py-2 px-6">+</button>
                    </div>
                    <button
                      type="submit"
                      className="border border-solid border-yellow-600 text-yellow-600 rounded
                       py-2 px-14 ml-3 hover:bg-yellow-600 hover:text-white">Add To Cart
                    </button>
                    <button
                      type="submit"
                      className="border border-solid border-neutral-800 text-neutral-800 rounded
                       py-2 px-14 ml-3 hover:bg-neutral-600 hover:text-white">+ Compare
                    </button>
                  </form>
                </div>
                <hr className="text-neutral-400 mt-8 mb-3"></hr>
                <div className="*:mb-3 *:text-[#A3A3A3]">
                  <p>SKU : SS001</p>
                  <p>Category: Sofa</p>
                  <p>Tags: Sofa, Chair, Home, Shop</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex space-x-16">
          <a href="" className="text-[20px] font-semibold text-neutral-500 hover:text-black ">Description</a>
          <a href="" className="text-[20px] font-semibold text-neutral-500 hover:text-black ">Additional Information</a>
          <a href="" className="text-[20px] font-semibold text-neutral-500 hover:text-black ">Reviews [5]</a>
        </section>
       <div className="pt-4 pb-8">
        <hr/>
       </div>
        <p className="text-[16px] font-semibold text-neutral-400">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable 
          look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p className="text-[16px] font-semibold text-neutral-400">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one
           of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that 
           is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
           <section className="pt-8 pb-16">
            <div className="flex gap-8">
            <img src="https://picsum.photos/id/1/624/378" alt="" />
            <img src="https://picsum.photos/id/1/624/378" alt="" />
            </div>
           </section>
           <div>
            <h3 className="text-[40px] font-bold text-center pb-4">Related Products</h3>
           </div>
           <section className="grid grid-cols-4 gap-5 pb-16">
          <div className="bg-slate-100">
            <div>
              <img
                src="https://picsum.photos/id/1/200/300"
                alt=""
                className="w-full h-[310px]"
              />
            </div>
            <div className=" flex flex-col m-4">
            <a href="productdetail"> <h3 className="font-bold text-[20px] ">Syltherine</h3></a>
              <p className="font-thin pb-2 text-[16px]">Stylish cafe chair</p>
              <span className="text-red-500 font-bold pb-3 text-[20px]">
                2.500.000đ
              </span>
              <button className="border border-solid border-yellow-600 px-4 py-2 font-bold text-yellow-600 text-[16px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="bg-slate-100">
            <div>
              <img
                src="https://picsum.photos/id/1/200/300"
                alt=""
                className="w-full h-[310px]"
              />
            </div>
            <div className=" flex flex-col m-4">
               <a href=""> <h3 className="font-bold text-[20px] ">Syltherine</h3></a>
              <p className="font-thin pb-2 text-[16px]">Stylish cafe chair</p>
              <span className="text-red-500 font-bold pb-3 text-[20px]">
                2.500.000đ
              </span>
              <button className="border border-solid border-yellow-600 px-4 py-2 font-bold text-yellow-600 text-[16px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="bg-slate-100">
            <div>
              <img
                src="https://picsum.photos/id/1/200/300"
                alt=""
                className="w-full h-[310px]"
              />
            </div>
            <div className=" flex flex-col m-4">
               <a href=""> <h3 className="font-bold text-[20px] ">Syltherine</h3></a>
              <p className="font-thin pb-2 text-[16px]">Stylish cafe chair</p>
              <span className="text-red-500 font-bold pb-3 text-[20px]">
                2.500.000đ
              </span>
              <button className="border border-solid border-yellow-600 px-4 py-2 font-bold text-yellow-600 text-[16px]">
                Add to cart
              </button>
            </div>
          </div>
          <div className="bg-slate-100">
            <div>
              <img
                src="https://picsum.photos/id/1/200/300"
                alt=""
                className="w-full h-[310px]"
              />
            </div>
            <div className=" flex flex-col m-4">
               <a href=""> <h3 className="font-bold text-[20px] ">Syltherine</h3></a>
              <p className="font-thin pb-2 text-[16px]">Stylish cafe chair</p>
              <span className="text-red-500 font-bold pb-3 text-[20px]">
                2.500.000đ
              </span>
              <button className="border border-solid border-yellow-600 px-4 py-2 font-bold text-yellow-600 text-[16px]">
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetailPage;
