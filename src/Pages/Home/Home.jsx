import { useLoaderData } from "react-router-dom";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeCards from "../../components/HomeCards/HomeCards";
import { useState } from "react";

const Home = () => {
  /* load primary data */
  const cardsData = useLoaderData();
  console.log(cardsData.map((donation) => console.log(donation.title)));
  /* searched result state */
  const [searchedCategory, setSearchedCategory] = useState(cardsData);

  const handleSearchBtn = () => {
    /* get the input field value */
    const searchCategory = document.getElementById("searchCategory");
    const theCategory = searchCategory.value;

    if (theCategory) {
      /* IF anything inputted in the search field */
      /* filter the result */
      const searchedDonations = cardsData.filter(
        (donation) =>
          donation.category.toLowerCase() === theCategory.toLowerCase()
      );

      /* set the result to the state */
      setSearchedCategory(searchedDonations);
    } else {
      /* for empty search input field set all data to the state like initial state */

      setSearchedCategory(cardsData);
    }

    /* clear the input field */
    searchCategory.value = "";
  };

  return (
    <section className="min-h-screen">
      {/* home banner added */}
      <HomeBanner handleSearchBtn={handleSearchBtn}></HomeBanner>
      <section className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        {/* unnecessary home cards practicing */}
        <HomeCards cardsData={searchedCategory}></HomeCards>
      </section>
    </section>
  );
};

export default Home;
