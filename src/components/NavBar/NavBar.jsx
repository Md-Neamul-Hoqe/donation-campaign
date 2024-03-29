import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/donation-campaign.svg";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/donation"}>Donation</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar absolute top-0 py-10 z-20 flex items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-normal">
            {navLinks}
          </ul>
        </div>
        <a href="/" className="min-sm:h-16 max-sm:w-full">
          <img src={logo} alt="donation-campaign logo" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-normal">{navLinks}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
