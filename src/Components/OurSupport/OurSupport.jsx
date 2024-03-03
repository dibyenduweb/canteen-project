const OurSupport = () => {
  return (
    <div className="mt-5">
      <div className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-3xl font-bold leadi"><span className="text-[#FF9F0D]">S</span>till You Need Our Support ?</h1>
            <p className="text-base">
            Don’t wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md text-white lg:justify-end">
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-3/5 placeholder-white p-2 rounded-l-lg sm:w-2/3 text-white bg-[#FF9F0D]"
              />
              <button
                type="button"
                className="w-2/5 p-2 font-semibold rounded-r-lg sm:w-1/3 dark:bg-white text-[#FF9F0D]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSupport;
