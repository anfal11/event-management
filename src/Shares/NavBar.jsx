import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar shadow-lg">
        {" "}
        {/* Add the shadow-lg class */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"> Games and Tech</a>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal text-lg px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12">
              <img src="https://i.ibb.co/74KRNzY/600px-Magicdelivery-gaming-logo-svg.png" />
            </div>
          </div>
          <div>
          <Link to="/login" className="btn">
            Log In
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
