import CreateSectionItemIcon from "../../assets/images/sideBarItemIcon.svg";
import "./CreateSectionItem.css";

interface CreateSectionItemTypes {
  text: string;
}
export function CreateSectionItem({ text }: CreateSectionItemTypes) {
  return (
    <div className="create-section-item">
      <img
        className="create-section-item__icon"
        src={CreateSectionItemIcon}
        alt="icon"
      />
      <p className="create-section-item__text">{text}</p>
    </div>
  );
}
