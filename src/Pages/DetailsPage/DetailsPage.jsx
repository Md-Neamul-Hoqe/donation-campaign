import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsPage = () => {
  const [donations, setDonations] = useState();
  const cards = useLoaderData();
  const { id: currentId } = useParams();
  const [details] = cards.filter((card) => card.id == currentId);
  const {
    picture,
    title,
    // category,
    // category_bg_color,
    text_button_bg_color,
    price,
    description,
  } = details;

  const greetings = () =>
    toast("Thank you for your selfless service through your donation.");

  const handleDonationList = (details) => {
    // console.log("donation", details);
    setDonations(details);
    console.log(donations);
  };

  return (
    <section className="py-40 mx-auto">
      <div className="card max-w-screen-lg mx-auto rounded-none">
        <figure className="relative rounded-lg">
          <img className="w-full" src={picture} alt={title} />
          <div className="card-actions bg-black/20 py-5 px-10 w-full absolute left-0 bottom-0">
            <button
              onClick={() => {
                handleDonationList(details);
                greetings();
              }}
              className={`btn border-0 capitalize font-semibold text-xl rounded drawer-overlay bg-[${text_button_bg_color}] text-white`}>
              Donate ${price}
            </button>
          </div>
        </figure>
        <div className="card-body p-0">
          <h2 className="card-title mt-14 mb-6">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default DetailsPage;
