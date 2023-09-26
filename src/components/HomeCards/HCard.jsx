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
      style={{ backgroundColor: `${card_bg_color}` }}
      className="rounded-lg">
      <figure className="p-0">
        <img
          src={picture}
          alt={category}
          className="rounded-t-lg w-full max-h-[calc(100vh/4)]"
        />
      </figure>
      <div className="card-body items-start p-5 text-center">
        <h2
          style={{
            backgroundColor: `${category_bg_color}`,
            color: `${text_button_bg_color}`,
          }}
          className="px-2 rounded">
          {category}
        </h2>
        <p style={{ color: `${text_button_bg_color}` }}>{title}</p>
      </div>
    </Link>
  );
};

HCard.propTypes = {
  cardData: PropTypes.object.isRequired,
};

export default HCard;
