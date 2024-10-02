import { GoGift, GoTrophy } from "react-icons/go";
import { GrFormSchedule, GrLinkNext } from "react-icons/gr";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section>
        <img
          className="m-auto"
          src="https://picsum.photos/id/1/1560/600"
          alt=""
        />
      </section>
      <main className="max-w-screen-xl m-auto pt-16 ">
        <section>
          <div className="flex justify-between items-center pb-4">
            <h2 className="text-[40px] font-bold">New Products</h2>
            <a
              href=""
              className="border border-solid border-yellow-600 text-base font-bold text-yellow-600 px-4 py-2"
            >
              View all products
            </a>
          </div>
        </section>
        <section className="grid grid-cols-4 gap-5">
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
        </section>
        <section>
          <div className="flex justify-between items-center pb-4 pt-16">
            <h2 className="text-[40px] font-bold">Gallery</h2>
            <a
              href=""
              className="border border-solid border-yellow-600 text-base font-bold text-yellow-600 px-4 py-2"
            >
              View all gallery
            </a>
          </div>
        </section>
        <div className="grid grid-cols-3 gap-8 ">
          <img src="https://picsum.photos/id/1/440/330" alt="" />
          <img src="https://picsum.photos/id/1/440/330" alt="" />
          <img src="https://picsum.photos/id/1/440/330" alt="" />
          <img src="https://picsum.photos/id/1/440/330" alt="" />
          <img src="https://picsum.photos/id/1/440/330" alt="" />
          <img src="https://picsum.photos/id/1/440/330" alt="" />
        </div>
        <section>
          <div className="flex justify-between items-center pb-4 pt-16">
            <h2 className="text-[40px] font-bold">News</h2>
            <a
              href=""
              className="border border-solid border-yellow-600 text-base font-bold text-yellow-600 px-4 py-2"
            >
              View all news
            </a>
          </div>
        </section>
        <section className="flex gap-8">
          <div>
            <div>
              <img
                src="https://picsum.photos/id/1/200/300"
                alt=""
                className="w-full h-[310px]"
              />
            </div>
            <div className=" flex flex-col ">
              <p className="items-center pt-4 text-[16px] text-gray-400 flex font-bold">
                <GrFormSchedule />
                24/4/2024
              </p>
              <h3 className="font-bold text-[20px] pb-3">
                A bedroom must have something like this
              </h3>
              <Link
                to=""
                className=" font-bold text-red-600 text-[16px] flex items-center "
              >
                Xem chi tiết <GrLinkNext className="m-2" />
              </Link>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://picsum.photos/id/1/200/300"
                alt=""
                className="w-full h-[310px]"
              />
            </div>
            <div className=" flex flex-col ">
              <p className="items-center pt-4 text-[16px] text-gray-400 flex font-bold">
                <GrFormSchedule />
                24/4/2024
              </p>
              <h3 className="font-bold text-[20px] pb-3">
                A bedroom must have something like this
              </h3>
              <Link
                to=""
                className=" font-bold text-red-600 text-[16px] flex items-center "
              >
                Xem chi tiết <GrLinkNext className="m-2" />
              </Link>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://picsum.photos/id/1/200/300"
                alt=""
                className="w-full h-[310px]"
              />
            </div>
            <div className=" flex flex-col ">
              <p className="items-center pt-4 text-[16px] text-gray-400 flex font-bold">
                <GrFormSchedule />
                24/4/2024
              </p>
              <h3 className="font-bold text-[20px] pb-3">
                A bedroom must have something like this
              </h3>
              <Link
                to=""
                className=" font-bold text-red-600 text-[16px] flex items-center "
              >
                Xem chi tiết <GrLinkNext className="m-2" />
              </Link>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://picsum.photos/id/1/200/300"
                alt=""
                className="w-full h-[310px]"
              />
            </div>
            <div className=" flex flex-col ">
              <p className="items-center pt-4 text-[16px] text-gray-400 flex font-bold">
                <GrFormSchedule />
                24/4/2024
              </p>
              <h3 className="font-bold text-[20px] pb-3">
                A bedroom must have something like this
              </h3>
              <Link
                to=""
                className=" font-bold text-red-600 text-[16px] flex items-center "
              >
                Xem chi tiết <GrLinkNext className="m-2" />
              </Link>
            </div>
          </div>
        </section>
        
      </main>
      <section className="bg-[#FFF7ED] mt-16">
        <div className="max-w-screen-xl m-auto">
          <div className="pb-16 pt-16 flex gap-20">
          <div >
            <div className="flex items-center">
            <GoTrophy className="text-[48px] mr-5" />
            <div>
              <h3 className="text-[20px] font-bold">High Quality</h3>
              <p className="font-semibold text-gray-400 mt-1">Crafted from top materials</p>
            </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
            <MdSupportAgent className="text-[48px] mr-5" />
            <div>
              <h3 className="text-[20px] font-bold">24 / 7 Support</h3>
              <p className="font-semibold text-gray-400 mt-1">Dedicated support</p>
            </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
            <HiOutlineBadgeCheck className="text-[48px] mr-5" />
            <div>
              <h3 className="text-[20px] font-bold">Warranty Protection</h3>
              <p className="font-semibold text-gray-400 mt-1">Over 2 years</p>
            </div>
            </div>
          </div>
          <div> 
            <div className="flex items-center">
            <GoGift  className="text-[48px] mr-5" />
            <div>
              <h3 className="text-[20px] font-bold">Free Shipping</h3>
              <p className="font-semibold text-gray-400 mt-1">Order over 150 $</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        </section>
      
    </>
  );
};

export default HomePage;
