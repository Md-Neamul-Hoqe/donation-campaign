import PropTypes from "prop-types";
import HCard from "./HCard";
const HomeCards = ({ cardsData }) => {
  console.log(cardsData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-[100px] max-sm:px-10">
      {cardsData?.map((card, idx) => (
        <HCard key={idx} cardData={card}></HCard>
      ))}
    </div>
  );
};

HomeCards.propTypes = {
  cardsData: PropTypes.array.isRequired,
};

export default HomeCards;
