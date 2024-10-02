import { FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { GrSend } from "react-icons/gr";
import { IoLogoInstagram, IoShareSocialOutline } from "react-icons/io5";
import { PiUserRectangle } from "react-icons/pi";
import { SlSocialTwitter } from "react-icons/sl";

const ContactPage = () => {
  return (
    <>
      <section>
        <img
          className="m-auto"
          src="https://picsum.photos/id/1/1560/600"
          alt=""
        />
      </section>
      <main>
        <section className="pt-16 pb-16 max-w-screen-xl m-auto ">
          <div className="grid grid-cols-3 gap-9">
          <div className=" flex gap-6">
            <div className="p-2">
            <GoLocation className="text-yellow-600 border-2 border-solid border-yellow-600 text-[64px] p-3" />
            </div>
            <div>
              <h3 className="text-[28px] font-bold pb-5 mt-4">ADDRESS</h3>
              <p className="text-[18px] font-normal text-gray-500">60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="p-2">
            <PiUserRectangle className="text-yellow-600 border-2 border-solid border-yellow-600 text-[64px] p-3" />
            </div>
            <div>
              <h3 className="text-[28px] font-bold pb-5 mt-4 ">CONTACT DETAILS</h3>
              <p className="font-normal text-gray-500">info@furniro.com</p>
              <p className=" text-[24px]  font-bold text-gray-500">02056278686</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="p-2">
            <IoShareSocialOutline className="text-yellow-600 border-2 border-solid border-yellow-600 text-[64px] p-3" />
            </div>
            <div>
              <h3 className="text-[28px] font-bold pb-5 mt-4 ">SOCIAL NETWORKS</h3>
              <div className="flex gap-5 *:text-[40px] *: text-gray-500">
                <a href=""><FaFacebookSquare /></a>
                <a href=""><IoLogoInstagram /></a>
                <a href=""><FaTiktok /></a>
                <a href=""><SlSocialTwitter /></a>
                <a href=""><FaSquareYoutube /></a>
              </div>
            </div>
          </div>
          </div>        
        </section>
        <section className=" max-w-screen-2xl grid grid-cols-2 m-auto">
          <div className=" max-w-screen-xl ">
          <img 
          src="https://picsum.photos/id/1/800/560"alt=""/>
          </div>
          <div className=" bg-neutral-200">
          <div className="content-center my-16 mr-20 ml-8 ">
                <div className="flex flex-col">
                <h3 className="pb-4 text-[20px] font-bold">CONTACT</h3>
                <h4 className="pb-8 text-[40px] font-bold">CONNECT WITH US NOW</h4>
                <form>
                    <div className="grid grid-cols-2 gap-8 pb-8 *:border-b-2 border-solid *:bg-neutral-200 *:border-neutral-400">
                      <input className=" pb-3" type="text" placeholder="First Name" />
                      <input className=" pb-3" type="text" placeholder="Last Name" />
                      <input className=" pb-3" type="email" placeholder="Email" />
                      <input className=" pb-3" type="number" placeholder="Phone Number" />
                      <input className=" pb-3" type="text" placeholder="Message" />
                    </div>
                    <button className="flex items-center gap-2 border border-solid border-yellow-600 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3" >
                      <GrSend />Send Infomation</button>
                </form>
                </div>
          </div>
          </div>
          
        </section>
      </main>
    </>
  );
};

export default ContactPage;
