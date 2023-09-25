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
  console.log(donations?.length);
  return (
    <>
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mb-10 min-h-screen">
        <div className="pt-40 max-xl:px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {donations?.length > 4
            ? donations
                .slice(0, donationShow)
                .map((donation) => (
                  <DonationCard
                    key={donation.id}
                    donation={donation}></DonationCard>
                ))
            : donations?.map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}></DonationCard>
              ))}
        </div>
        {/* {donations?.length || (
          <h1 className="text-2xl font-extrabold mx-auto">
            Do Donation Found Yet.
          </h1>
        )} */}
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
