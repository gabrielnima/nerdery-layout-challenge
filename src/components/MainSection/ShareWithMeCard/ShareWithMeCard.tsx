import { Square } from "../../Square/Square";
import { Circle } from "../../Circle/Circle";
import "./ShareWithMeCard.css";
interface PropsShareWithMeCardTypes {
  title: string;
  created: string;
  circles: {
    color: string;
  }[];
}

export function ShareWithMeCard({
  title,
  created,
  circles,
}: PropsShareWithMeCardTypes) {
  return (
    <div className="share-with-me-card">
      <div className="share-with-me-card-graphics">
        <Square />
        <div className="share-with-me-card__circles">
          {circles.map((circle, index) => (
            <Circle key={index} color={circle.color} />
          ))}
        </div>
      </div>
      <div className="share-with-me-card__text">
        <p className="share-with-me-card__title">{title}</p>
        <p className="share-with-me-card__created">{created}</p>
      </div>
    </div>
  );
}
