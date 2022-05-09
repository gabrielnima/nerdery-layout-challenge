import sideBarItemIcon from "../../assets/images/sideBarItemIcon.svg";
import "./SideBarItem.css";

interface SideBarItemPropsTypes {
  text: string;
}
export function SideBarItem({ text }: SideBarItemPropsTypes) {
  return (
    <div className="side-bar-item">
      <div className="side-bar-item__icon"></div>
      <p className="side-bar-item__text">{text}</p>
    </div>
  );
}
