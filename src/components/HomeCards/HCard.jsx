import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const HCard = ({ cardData }) => {
  const {
    id,
    card_bg_color,
    category,
    category_bg_color,
    // description,
    picture,
    // price,
    text_button_bg_color,
    title,
  } = cardData;
  return (
    <Link
      to={`/details/${id}`}
      className={`card bg-[${card_bg_color}] rounded-lg`}>
      <figure className="p-0">
        <img
          src={picture}
          alt={category}
          className="rounded-none w-full max-h-[calc(100vh/4)]"
        />
      </figure>
      <div className="card-body items-start p-5 text-center">
        <h2
          className={`card-title bg-[${category_bg_color}]/20 text-[${text_button_bg_color}] px-3 font-medium text-sm rounded`}>
          {category}
        </h2>
        <p className={`text-[${text_button_bg_color}]`}>{title}</p>
      </div>
    </Link>
  );
};

HCard.propTypes = {
  cardData: PropTypes.object.isRequired,
};

export default HCard;
