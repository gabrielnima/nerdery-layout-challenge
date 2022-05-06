import "./Circle.css";
interface PropsCircleTypes {
  text?: string;
  color?: string;
}

export function Circle({ text, color }: PropsCircleTypes) {
  return (
    <div className={`circle ${color}`}>
      <p className="circle__text">{text}</p>
    </div>
  );
}
