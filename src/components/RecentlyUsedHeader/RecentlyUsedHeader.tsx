import iconLeft from "../../assets/images/iconLeft.svg";
import iconRight from "../../assets/images/iconRight.svg";
import "./RecentlyUsedHeader.css";
export function RecentlyUsedHeader() {
  return (
    <div className="recently-used__header">
      <h2 className="recently-used__title">Recently Used</h2>
      <div className="recently-used__icons">
        <img
          className="recently-used__icon recently-used__icon--iconleft"
          src={iconLeft}
          alt="square"
        />
        <img
          className="recently-used__icon recently-used__icon--iconright"
          src={iconRight}
          alt="square"
        />
      </div>
    </div>
  );
}
