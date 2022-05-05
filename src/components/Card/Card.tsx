import { Circle } from "../Circle/Circle";
import { Square } from "../Square/Square";
import points from "../../assets/images/points.svg";
import "./Card.css";

interface PropsCardTypes {
  title: string;
  created: string;
  circleCounter: number;
}
export function Card({ title, created, circleCounter }: PropsCardTypes) {
  return (
    <div className="card">
      <div className="card__graphics">
        <div className="card__squares">
          <Square />
          <Square />
        </div>
        <div className="card__circles">
          {Array.from({ length: circleCounter }, (_, index) => (
            <Circle key={index} text={index === 2 ? "+3" : ""} />
          ))}
        </div>
        <img className="card__points" src={points} alt="points Icon" />
      </div>
      <div className="card__text">
        <h3 className="card__title">{title}</h3>
        <h4 className="card__created">{created}</h4>
      </div>
    </div>
  );
}
