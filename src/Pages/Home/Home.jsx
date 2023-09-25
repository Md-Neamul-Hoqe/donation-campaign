import { useLoaderData } from "react-router-dom";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeCards from "../../components/HomeCards/HomeCards";

const Home = () => {
  const cardsData = useLoaderData();
  console.log(cardsData);
  return (
    <section className="min-h-screen">
      <HomeBanner></HomeBanner>
      <section className="max-w-screen-lg mx-auto">
        <HomeCards cardsData={cardsData}></HomeCards>
      </section>
    </section>
  );
};

export default Home;
