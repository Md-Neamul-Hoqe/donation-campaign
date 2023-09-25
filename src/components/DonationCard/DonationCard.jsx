import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const {
    id,
    picture,
    category,
    title,
    price,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = donation;

  return (
    <div
      className={`card max-lg:h-40 rounded-lg flex-row p-0 items-center bg-[${card_bg_color}]`}>
      <figure className="p-0 w-60 h-full">
        <img className="h-full m-0 p-0" src={picture} alt={title} />
      </figure>
      <div className="card-body items-start flex-1 text-center lg:px-5">
        <h2
          className={`card-title text-sm whitespace-nowrap badge-lg rounded bg-[${category_bg_color}] text-[${text_button_bg_color}]`}>
          {category}
        </h2>
        <h2 className="card-title text-sm whitespace-nowrap">{title}</h2>
        <p className={`text-[${text_button_bg_color}]`}>${price}</p>
        <div className="card-actions">
          <Link
            to={`/details/${id}`}
            className="btn max-lg:btn-xs btn-primary text-xs whitespace-nowrap">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
