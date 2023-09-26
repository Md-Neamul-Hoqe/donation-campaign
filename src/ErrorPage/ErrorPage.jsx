import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl md:text-9xl font-extrabold">Oops!!!</h1>
      <p className="my-10">Sorry! Not Found</p>
      <Link className="btn btn-accent text-white" to={"/"}>
        Go Back To Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
