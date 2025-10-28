import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/learnParams">Params</NavLink>
            </li>
            <li>
                <NavLink to="/common/about/btn">About</NavLink>
            </li>
            <li>
                <NavLink to="/common/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;