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
    <div className={`card rounded-lg flex-row items-center bg-[${card_bg_color}]`}>
      <figure className="p-0 w-60 h-60 bg-transparent">
        <img className="h-full" src={picture} alt={title} />
      </figure>
      <div className="card-body items-start flex-1 text-center px-5">
        <h2
          className={`card-title bg-[${category_bg_color}] text-[${text_button_bg_color}]`}>
          {category}
        </h2>
        <h2 className="card-title">{title}</h2>
        <p className={`text-[${text_button_bg_color}]`}>${price}</p>
        <div className="card-actions">
          <Link to={`/donation/${id}`} className="btn btn-primary">
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
