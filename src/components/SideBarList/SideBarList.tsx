import { SideBarItem } from "../SideBarItem/SideBarItem";
import "./SideBarList.css";
export function SideBarList() {
  const options = [
    { text: "Home" },
    { text: "My Files" },
    { text: "Recent Files" },
    { text: "Shared Files" },
    { text: "Files Request" },
    { text: "Trash" },
  ];
  return (
    <div className="side-bar-list-container">
      <div className="side-bar-rectangle"></div>
      <div className="side-bar-list">
        {options.map((option) => (
          <SideBarItem text={option.text} />
        ))}
      </div>
      <div className="side-bar-line"></div>
    </div>
  );
}
