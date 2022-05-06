import { ShareWithMeCard } from "../ShareWithMeCard/ShareWithMeCard";
import "./ShareWithMeCardContainer.css";
import "./ShareWithMeCardContainer";
export function ShareWithMeCardContainer() {
  const data = [
    {
      title: "Landing Page",
      created: "Created: 20.02.2020",
      circles: [{ color: "green" }, { color: "red" }],
    },
    {
      title: "Illustration Pack",
      created: "Created: 20.02.2020",
      circles: [{ color: "green" }, { color: "red" }, { color: "orange" }],
    },
    {
      title: "CV Design",
      created: "Created: 20.02.2020",
      circles: [{ color: "green" }, { color: "orange" }],
    },
  ];

  return (
    <div className="share-with-me-card-container">
      {data.map((item) => (
        <ShareWithMeCard
          title={item.title}
          created={item.created}
          circles={item.circles}
        />
      ))}
    </div>
  );
}
