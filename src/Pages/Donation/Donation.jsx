import { useLoaderData, useParams } from "react-router-dom";
import DonationCards from "../../components/DonationCards/DonationCards";

const Donation = () => {
  const cards = useLoaderData();
  const parameters = useParams();
  console.log(parameters);
  console.log(cards);
  return (
    <div className="py-40">
      <DonationCards></DonationCards>
    </div>
  );
};

export default Donation;
