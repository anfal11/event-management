import { Outlet } from "react-router-dom";
import NavBar from "../Shares/NavBar";

const Root = () => {
  return (
    <div className="font-poppins max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
