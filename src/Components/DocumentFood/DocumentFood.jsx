import fish from "../../assets/icon/fish.png";
import group1 from "../../assets/icon/group1.png";
import group2 from "../../assets/icon/group2.png";
import group3 from "../../assets/icon/group3.png";
import group4 from "../../assets/icon/group4.png";

const DocumentFood = () => {
  return (
    <>
      <div className="relative w-[1200px] h-[300px]">
        <img
          className="w-full h-full opacity-60 object-cover"
          src={fish}
          alt=""
        />
          <div className="flex justify-evenly absolute top-14 w-full">
            <div>
              <img src={group1} alt="" />
              <p>Professional Chefs</p>
            </div>
            <div>
              <img src={group2} alt="" />
              <p>Items Of Food</p>
            </div>
            <div>
              <img src={group3} alt="" />
              <p>Years Of Experience</p>
            </div>
            <div>
              <img src={group4} alt="" />
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default DocumentFood;
