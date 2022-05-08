import userImage from "../../assets/images/userImage.svg";
import "./StorageHeader.css";
interface PropsHeaderTypes {
  name: string;
}
export function StorageHeader({ name }: PropsHeaderTypes) {
  return (
    <div className="storage-header">
      <div className="storage-header__icons">
        <div className="storage-header__icon"></div>
        <div className="storage-header__icon"></div>
      </div>

      <div className="storage-header__user">
        <p className="storage-header__name">{name}</p>
        <img className="storage-header__img" src={userImage} alt="user photo" />
      </div>
    </div>
  );
}
