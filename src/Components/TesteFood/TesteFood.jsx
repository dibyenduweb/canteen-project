import img1 from "../../assets/img/food1.png";
import img2 from "../../assets/img/food2.png";
import img3 from "../../assets/img/food3.png";
import img4 from "../../assets/img/food4.png";
import img5 from "../../assets/img/food5.png";
import img6 from "../../assets/img/food6.png";
import { FaHamburger } from "react-icons/fa";
import { LuCookie } from "react-icons/lu";
import { IoWine } from "react-icons/io5";

const TesteFood = () => {
  return (
    <div className="flex mx-auto py-20">
      <div className="grid grid-cols-12 grid-rows-12 border gap-4 w-[526px]">
        {/* <img src={img1} alt="" className="w-full h-auto" />
        <img src= alt="" className="w-full h-auto" />
        <img src= alt="" className="w-full h-auto" />
        <img src= alt="" className="w-full h-auto" />
        <img src= alt="" className="w-full h-auto" />
        <img src= alt="" className="w-full h-auto" /> */}
        <img src={img1}alt="" className="col-span-7 row-span-5 w-full h-auto" />
        <img src={img2}  alt="" className="col-span-5 row-span-6 w-full h-auto" />
        <img src={img4}  alt="" className="col-span-2 row-span-2 w-full h-auto" />
        <img src={img5}  alt="" className="col-span-2 row-span-2 w-full h-auto" />
        <img src={img6}  alt="" className="col-span-2 row-span-1 w-full h-auto" />
        <img src={img3}  alt="" className="col-span-4 row-span-2 w-full h-auto" />
      </div>
      <div className="ml-3  6">
        <h1 className="italic text-2xl text-[#FF9F0D]">
          Why Choose Us
        </h1>
        <h1 className="text-5xl font-bold w-[500px]">
          <span className="inline-block text-red-500">Ex</span>traordinary Taste
          and Experience
        </h1>

        <p className="w-[526px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
    
        <div className="flex gap-6 mt-6">
            <div className="bg-orange-500 text-white text-5xl p-2 rounded-md"><FaHamburger /></div>
            <div className="bg-orange-500 text-white text-5xl p-2 rounded-md"><LuCookie /></div>
            <div className="bg-orange-500 text-white text-5xl p-2 rounded-md"><IoWine /></div>
        </div>
               <div className="py-5">
               <div className="bg-amber-500 w-2 flex">
                    <div className="px-6">
                    <h1 className="text-[#FF9F0D] text-4xl font-bold">30+</h1>
                    </div>
                    <div>
                    <h1>Years of <span className="font-bold">Experienced</span></h1>
                    </div>
                </div>
               </div>
      </div>
    </div>
  );
};

export default TesteFood;
