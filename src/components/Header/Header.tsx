import "./Header.css";
interface PropsHeaderTypes {
  text: string;
}
export function Header({ text }: PropsHeaderTypes) {
  return (
    <div className="header">
      <h2 className="header__title">{text}</h2>
      <p className="header__text"> View All</p>
    </div>
  );
}
