import { Link } from "react-router-dom";
import { navitems } from "../navitems";

const SideBar = () => {
  return (
    <nav id="sidenar">
      {navitems.map((item) => (
        <Link to={item.path} key={item.id} className="nav-item">
          <div className="icon-container">{item.icon}</div>
          <div>{item.title}</div>
        </Link>
      ))}
    </nav>
  );
};

export default SideBar;
