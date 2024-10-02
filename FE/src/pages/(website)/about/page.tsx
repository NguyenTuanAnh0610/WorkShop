import { BiBookHeart } from "react-icons/bi";
import { CgShapeTriangle } from "react-icons/cg";
import { GoGoal } from "react-icons/go";

const AboutPage = () => {
  return (
    <>
      <section>
        <img
          className="m-auto"
          src="https://picsum.photos/id/1/1560/600"
          alt=""
        />
      </section>
      <main className="max-w-screen-xl m-auto pt-16">
        <div className="flex text-center gap-8">
          <div className="flex flex-col ">
            <GoGoal className="m-auto text-[100px] text-yellow-600" />
            <h3 className="text-[32px] font-bold pt-5 pb-3">OUR MISSION</h3>
            <p className="text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex flex-col ">
            <CgShapeTriangle className="m-auto text-[100px]  text-yellow-600" />
            <h3 className="text-[32px] font-bold pt-5 pb-3">OUR VISION</h3>
            <p className="text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex flex-col ">
            <BiBookHeart className="m-auto text-[100px]  text-yellow-600" />
            <h3 className="text-[32px] font-bold pt-5 pb-3">OUR VALUES</h3>
            <p className="text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        <section className="flex gap-8 pt-16">
          <img src="https://picsum.photos/id/1/600/400" alt="" />
          <div className=" flex flex-col justify-center">
            <h3  className="text-[32px] font-bold">ABOUT FURIRO COMPANY </h3> 
            <p className="pt-8 pb-3 text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-[18px]">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section>
        <div>
          <h3 className="text-center pt-16 pb-8 text-[32px] font-bold w-2/4 m-auto ">WE CREATE NATURAL WOOD FURNITURE
          AS WELL AS HIGH-QUALITY</h3>
        </div>

        <section>
          <div className=" flex gap-8 pb-16">
          <img src="https://picsum.photos/id/1/300/450" alt="" />
          <img src="https://picsum.photos/id/1/300/450" alt="" />
          <img src="https://picsum.photos/id/1/300/450" alt="" />
          <img src="https://picsum.photos/id/1/300/450" alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
