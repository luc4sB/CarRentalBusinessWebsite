import "./styles/NavBar.css"
import { Outlet, Link } from "react-router-dom";


const navlinks = [
  {
    name: "Home",
    link: "./homepage",
  },
  {
    name: "Login",
    link: "./login",
  },
];

const NavBar = () => {

  return (
    <>
      <div className="navbar">
        <ul>
          {navlinks.map((item) => (
              <li key={item.name}>
  
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
        </ul>
      </div>
      
    </>
  );
};

export default NavBar;
