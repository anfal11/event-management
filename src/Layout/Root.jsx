import { Outlet } from "react-router-dom";
import NavBar from "../Shares/NavBar";
import Footer from "../Shares/Footer";


const Root = () => {
  return (
    <div className="font-poppins">
        <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
        </div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
