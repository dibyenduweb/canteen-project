import Banner from "../../Components/Banner/Banner";
import BestFood from "../../Components/BestFood/BestFood";
import DocumentFood from "../../Components/DocumentFood/DocumentFood";
import EveryFood from "../../Components/EveryFood/EveryFood";
import FoodItem from "../../Components/FoodItem/FoodItem";
import LatestBlog from "../../Components/LatestBlog/LatestBlog";
import OurMenu from "../../Components/OurMenu/OurMenu";
import OurSupport from "../../Components/OurSupport/OurSupport";
import TesteFood from "../../Components/TesteFood/TesteFood";

const Home = () => {
  return (
    <div>
      <div className="mt-20 lg:px-16 md:px-10 px-5">
        <Banner></Banner>
        <BestFood></BestFood>
        <FoodItem></FoodItem>
        <TesteFood></TesteFood>
        <DocumentFood></DocumentFood>
        <OurMenu></OurMenu>
      </div>
      <EveryFood></EveryFood>
      <div className="mt-20 lg:px-16 md:px-10 px-5">
        <LatestBlog></LatestBlog>
        <OurSupport></OurSupport>
      </div>
    </div>
  );
};

export default Home;
