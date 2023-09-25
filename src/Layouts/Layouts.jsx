import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
const Layouts = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Layouts;
