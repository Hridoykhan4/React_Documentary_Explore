import { use, useContext } from "react";
import { NavLink } from "react-router-dom";
import BookMarkContext from "../context/BookMarkContext";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { bookMark } = useContext(BookMarkContext);
  const {user: {name, age}} = use(UserContext);

  return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{name}: {age}</a>
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
              <a>Bookmarks: ({bookMark.length})</a>
            </li>
            {/*       <li>
                <NavLink to="/common/about/btn">About</NavLink>
            </li>
            <li>
                <NavLink to="/common/contact">Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;