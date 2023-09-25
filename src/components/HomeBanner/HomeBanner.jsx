import homeBanner from "../../assets/images/home-banner.jpeg";

const HomeBanner = () => {
  return (
    <div
      className="hero min-h-screen text-black -z-10"
      style={{
        backgroundImage: `url(${homeBanner})`,
      }}>
      <div className="absolute inset-0 bg-white opacity-80 z-0 pointer-events-none"></div>

      <div className="hero-content text-center text-black">
        <div className=" min-w-max mx-auto">
          <h1 className="mb-10 text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>

          {/* Search Section */}
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <button className="btn bg-red-500 hover:bg-red-500 text-white capitalize join-item">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
