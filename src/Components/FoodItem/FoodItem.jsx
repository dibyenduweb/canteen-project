import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const FoodItem = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="mt-10">
           <h1 className="text-5xl my-5 text-center font-bold"> <span className="inline-block text-red-500">Ch</span>oose Food Iteam</h1>
           <Carousel responsive={responsive}>
           <img className=" h-[250px] w-full" src="/src/assets/fooditem.png" alt="" />
           <img className=" h-[250px] w-full" src="/src/assets/fooditem2.png" alt="" />
           <img className=" h-[250px] w-full" src="/src/assets/fooditem3.png" alt="" />
           <img className=" h-[250px] w-full" src="/src/assets/fooditem4.png" alt="" />
           <img className=" h-[250px] w-full" src="/src/assets/fooditem2.png" alt="" />
           
</Carousel>
        </div>
    );
};

export default FoodItem;