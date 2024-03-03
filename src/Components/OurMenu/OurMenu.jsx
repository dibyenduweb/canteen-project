
const OurMenu = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center italic text-3xl text-[#FF9F0D]">
        Choose & pick
      </h1>
      <h1 className="text-5xl font-bold text-center">
        <span className="text-[#FF9F0D]">F</span>rom Our Menu
      </h1>
      <div className="mt-4 gap-4 text-sm font-bold flex items-center justify-center">
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
        >
          Breakfast
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
        >
          Lunch
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
        >
          Dinner
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
        >
          Dessert
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
        >
          Drink
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
        >
          Snack
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="px-5 py-1 border-b-2 border-transparent hover:text-[#FF9F0D] hover:border-[#FF9F0D]"
        >
          Soups
        </a>
      </div>
      <div className="flex items-center justify-start gap-5">
        <img
          src="https://i.ibb.co/c1347hY/unsplash-Lv174o7fn7-Y.png"
          alt=""
          className="ml-28 mr-28"
        />

        <img
          src="https://i.ibb.co/v1VS1CB/unsplash-OFismyez-Pn-Y.png"
          alt=""
          className="-mt-60 -ml-8 w-12 h-12 rounded-md"
        />
        <div>
          <h1 className="text-center text-lg font-bold -mt-40 -ml-32">
            Lettuce Leaf
          </h1>
          <p className="text-center text-sm -mt-30 ml-7">
            Lacus nisi, et ac dapibus velit in consequat.
          </p>
          <h6 className="ml-7 text-[#FF9F0D] font-bold">12.5$</h6>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
