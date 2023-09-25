

const DonationCards = () => {

  return (
    <section className="lg:px-36 mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="card card-side bg-base-100">
        <figure>
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCards;
