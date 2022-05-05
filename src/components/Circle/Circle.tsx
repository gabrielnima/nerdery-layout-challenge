import "./Circle.css";
interface PropsCircleTypes {
  text?: String;
}

export function Circle({ text }: PropsCircleTypes) {
  return (
    <div className="circle">
      <p className="circle__text">{text}</p>
    </div>
  );
}
