import sideBarItemIcon from "../../../assets/images/sideBarItemIcon.svg";
import "./SearchBar.css";
export function SearchBar() {
  return (
    <div className="search-bar-container">
      <img className="search-bar__icon" src={sideBarItemIcon} />
      <input className="search-bar" type="text" placeholder="Search" />
    </div>
  );
}
