import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsPage = () => {
  /* Initially let the LS empty [] */
  const [LSDonations, setLSDonations] = useState([]);

  /* load the data from loader hook */
  const listOfAllDonations = useLoaderData();

  /* get the id from the parameter passes by the url */
  const { id: currentId } = useParams();

  /* find the donation details from the list of donation */
  const [details] = listOfAllDonations.filter(
    (eachDonation) => eachDonation.id == currentId
  );

  const {
    picture,
    title,
    // category,
    // category_bg_color,
    text_button_bg_color,
    price,
    description,
  } = details || {};

  const greetings = () =>
    toast("Thank you for your selfless service through your donation.");

  const handleDonationList = (donation) => {
    /* load the donation list */
    const donationsStored = localStorage.getItem("donations");

    /* if exists previous donation list */
    if (donationsStored) {
      const preDonations = JSON.parse(donationsStored);

      /* find the donation in the list */
      const isExists = preDonations.find(
        (preDonation) => preDonation.id == donation.id
      );

      /* if this type of donation already exists */
      if (!isExists) {
        const donations = [...preDonations, donation];

        /* set to state */
        setLSDonations(donations);

        /* set to local storage / database */
        return localStorage.setItem("donations", JSON.stringify(donations));
      } else {
        /* toast for donation again */
        return toast("Thanks To Donate Again.");
      }
    }
    console.log(picture);
    /* If doesn't exist any list */
    setLSDonations([donation]);

    /* set to local storage / database */
    return localStorage.setItem("donations", JSON.stringify([donation]));
  };

  return (
    <section className="py-32 md:py-40">
      <h1
        className={`text-4xl font-extrabold justify-center items-center min-h-[calc(100vh-200px)] ${
          title ? "hidden" : "flex"
        }`}>
        Not Found Such Donation
      </h1>
      <div className="card max-md:px-5 max-w-screen-xl 2xl:max-w-screen-2xl mx-auto rounded-none">
        <figure className="relative rounded-lg">
          <img className="w-full" src={picture} alt={title} />
          <div className="card-actions bg-black/20 max-sm:p-2 py-5 px-10 w-full absolute left-0 bottom-0">
            <button
              onClick={() => {
                {
                  handleDonationList(details);

                  /* to prevent greeting without adding the donation to the LS */
                  LSDonations?.length >= 0 && greetings();
                }
              }}
              style={{
                backgroundColor: `${text_button_bg_color}`,
              }}
              className="btn btn-md max-sm:btn-xs max-sm:text-xs border-0 capitalize font-semibold text-xl rounded drawer-overlay text-white">
              Donate ${price}
            </button>
          </div>
        </figure>
        <div className="card-body p-0">
          <h2 className="card-title mt-14 mb-6">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <ToastContainer className="max-md:max-w-[300px] max-md:ms-auto space-y-3 max-md:py-10"></ToastContainer>
    </section>
  );
};

export default DetailsPage;
