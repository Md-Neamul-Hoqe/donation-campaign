import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-w-screen flex items-center justify-center">
      <h1 className="text-5xl font-extrabold">Oops!!!</h1>
      <p className="my-10">Sorry! Not Found</p>
      <Link className="btn btn-accent" to={"/"}>
        Go Back To Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
