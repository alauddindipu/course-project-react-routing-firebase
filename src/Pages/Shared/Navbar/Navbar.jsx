import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import userPic from "../../../assets/image.png";

export default function Navbar() {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (<> {
    " "
  } < li > {
    " "
  } < NavLink to = "/" > Home</NavLink> {
    " "
  } < /li> {
            " "
        }
        <li>
        {" "}
        <NavLink to="/course">Products</NavLink>{" "}
 < /li> {
            " "
        }
        </ >);
  return (<div className="sticky top-0 z-50">
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000 / svg " className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost md:text-3xl lg:text-4xl xl:text-4xl">TechBooks</Link>{" "}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* {console.log(user.photoURL)} */}
      {user && <span className="mr-3">{user.displayName}</span>}

      <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mr-3"
        >
          <div className="w-10 rounded-full">
          {user? (<img alt="User" src={user.photoURL} />
          ):(
            <img alt="User" src={userPic} />
          )}
          </div>
      </div>

      {user ? (
          
          <button
            onClick={handleSignOut}
            className="btn btn-sm btn-outline btn-success text-md rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-info text-md rounded-none">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>{" "}
  </div>);
}
