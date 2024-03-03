import { SiNike } from "react-icons/si";

const BestFood = () => {
    return (
        <div className="my-5 px-5 border-2 container mx-auto">
           <div className="grid lg:grid-cols-2 md:grid-cols-2 py-5 justify-center items-center">
            <div className="space-y-3">
                <h1 className="text-5xl font-bold"><span className="text-red-600 ">We</span> Create the best foody product</h1>
                <p className="text-sm"> Food science is the study of the physical, chemical, and biological aspects of food and how they affect its quality, safety, and functionality. You need to understand how different ingredients, processes, and packaging affect the nutritional value, sensory properties, shelf life, and environmental impact of your product.</p>

                <p ><SiNike className="inline-block" /> Sustainability and ingredient sourcing</p>
                <p><SiNike className="inline-block" /> Market research and validating</p>
                <p> <SiNike className="inline-block" /> 
Involve consumers in the process</p>
                <button className="bg-yellow-300 rounded-3xl font-bold px-10 py-3">Read More</button>
            </div>
            <div className="w-full overflow-hidden  ">
                    <div className="mx-auto w-full mb-2">
                        <img src="/src/assets/bestfood.png" alt="" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 justify-center items-center gap-2 ">
                        <img src="/src/assets/bestfood2.png" alt="" />
                        <img src="/src/assets/bestfood3.png" alt="" />
                    </div>
            </div>
           </div>
        </div>
    );
};

export default BestFood;