import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  /* a donation object destruction */
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
    /* tailwindcss dynamic classes not work and so used dynamic styles */

    <div
      style={{
        backgroundColor: `${card_bg_color}`,
      }}
      className={`card max-lg:h-40 rounded-lg flex-row p-0 items-center`}>
      <figure className="p-0 w-60 h-full">
        <img className="h-full m-0 p-0" src={picture} alt={title} />
      </figure>
      <div className="card-body items-start flex-1 text-center lg:px-5">
        <h2
          style={{
            backgroundColor: `${category_bg_color}`,
            color: `${text_button_bg_color}`,
          }}
          className={`card-title text-sm whitespace-nowrap badge-lg rounded`}>
          {category}
        </h2>
        <h2 className="card-title text-sm whitespace-nowrap">{title}</h2>
        <p
          style={{
            color: `${text_button_bg_color}`,
          }}>
          ${price}
        </p>
        <div className="card-actions">
          <Link
            to={`/details/${id}`}
            style={{
              backgroundColor: `${text_button_bg_color}`,
            }}
            className="btn max-lg:btn-xs text-white border-none text-xs whitespace-nowrap">
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
