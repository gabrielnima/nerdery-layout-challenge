import { Card } from "../Card/Card";
import "./CardsContainer.css";
export function CardsContainer() {
  const cardValues = [
    { title: "App Project", created: "Created: 20.02.2020", circleCounter: 2 },
    {
      title: "Project: fitbit",
      created: "Created: 28.02.2020",
      circleCounter: 2,
    },
    {
      title: "Client Documents",
      created: "Created: 4.03.2020",
      circleCounter: 3,
    },
  ];
  return (
    <div className="cards-container">
      {/* {Array.from({ length: counter }, (_, index) => (
        <Card key={index} />
      ))} */}
      {cardValues.map((card) => (
        <Card
          title={card.title}
          created={card.created}
          circleCounter={card.circleCounter}
        />
      ))}
    </div>
  );
}
