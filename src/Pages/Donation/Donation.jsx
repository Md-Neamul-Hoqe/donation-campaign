import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";

const Donation = () => {
  const [donationShow, setDonationShow] = useState(4);
  const [shownAll, setShownAll] = useState(true);
  const donations = JSON.parse(localStorage.getItem("donations"));

  useEffect(() => {
    if (donations?.length > 4) {
      setShownAll(false);
    }
  }, [donations?.length]);

  return (
    <>
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mb-10 pt-40 max-xl:px-5">
        <div
          className={
            donations?.length && "grid grid-cols-1 md:grid-cols-2 gap-6"
          }>
          {donations?.length ? (
            donations?.length > 4 ? (
              donations
                .slice(0, donationShow)
                .map((donation) => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}></DonationCard>
                ))
            ) : (
              donations?.map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}></DonationCard>
              ))
            )
          ) : (
            <h1 className="text-2xl font-extrabold mx-auto flex items-center justify-center min-h-[calc(100vh-200px)]">
              No Donation Added Yet.
            </h1>
          )}
        </div>
        <button
          onClick={() => {
            setDonationShow(donations.length);
            setShownAll(!shownAll);
          }}
          className={
            shownAll
              ? "hidden"
              : "my-10 btn block mx-auto btn-accent capitalize text-white"
          }>
          See All
        </button>
      </div>
    </>
  );
};

export default Donation;
