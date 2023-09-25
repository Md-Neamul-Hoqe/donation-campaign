import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsPage = () => {
  const [donations, setDonations] = useState([]);
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

  const handleDonationList = (donation) => {
    const donationsStored = localStorage.getItem("donations");
    // console.log(donationsStored);

    /* if exists previous donation list */
    if (donationsStored) {
      const preDonations = JSON.parse(donationsStored);
      const isExists = preDonations.find(
        (preDonation) => preDonation.id == donation.id
      );

      /* if this type of donation already exists */
      if (!isExists) {
        const donations = [...preDonations, donation];

        /* set to state */
        setDonations(donations);

        /* set to local storage / database */
        return localStorage.setItem("donations", JSON.stringify(donations));
      } else {
        return toast("Thanks To Donate Again.");
      }
    }

    /* If doesn't exist any list */
    setDonations([donation]);

    /* set to local storage / database */
    localStorage.setItem("donations", JSON.stringify(donations));
  };

  return (
    <section className="py-32 md:py-40">
      <div className="card max-md:px-5 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto rounded-none">
        <figure className="relative rounded-lg">
          <img className="w-full" src={picture} alt={title} />
          <div className="card-actions bg-black/20 max-sm:p-2 py-5 px-10 w-full absolute left-0 bottom-0">
            <button
              onClick={() => {
                {
                  handleDonationList(details);
                  greetings();
                }
              }}
              className={`btn btn-md max-sm:btn-xs max-sm:text-xs border-0 capitalize font-semibold text-xl rounded drawer-overlay bg-[${text_button_bg_color}] text-white`}>
              Donate ${price}
            </button>
          </div>
        </figure>
        <div className="card-body p-0">
          <h2 className="card-title mt-14 mb-6">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <ToastContainer
        className={`max-md:max-w-[300px] max-md:ms-auto space-y-3 max-md:py-10`}></ToastContainer>
    </section>
  );
};

export default DetailsPage;
