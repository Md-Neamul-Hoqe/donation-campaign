import DonationCard from "../../components/DonationCard/DonationCard";

const Donation = () => {
  const donations = JSON.parse(localStorage.getItem("donations"));

  console.log(donations);
  return (
    <div className="py-40 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
      {donations?.map((donation) => (
        <DonationCard key={donation.id} donation={donation}></DonationCard>
      ))}
    </div>
  );
};

export default Donation;
