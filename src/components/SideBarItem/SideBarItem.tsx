import sideBarItemIcon from "../../assets/images/sideBarItemIcon.svg";
import "./SideBarItem.css";

interface SideBarItemPropsTypes {
  text: string;
}
export function SideBarItem({ text }: SideBarItemPropsTypes) {
  return (
    <div className="side-bar-item">
      <img className="side-bar-item__icon" src={sideBarItemIcon} alt="icon" />
      <p className="side-bar-item__text">{text}</p>
    </div>
  );
}
