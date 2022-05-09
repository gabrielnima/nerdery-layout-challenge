import "./OptionButton.css";
interface PropsOptionButton {
  text: string;
  img?: string;
}
export function OptionButton({ text, img }: PropsOptionButton) {
  return (
    <div className="option-button">
      <p className="option-button__text">{text}</p>
      {img ? (
        <div className="option-button__add-button">
          <img className="option-button__img" src={img} alt="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
