import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
const Layouts = () => {
  return (
    <>
      <header className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto relative">
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Layouts;
