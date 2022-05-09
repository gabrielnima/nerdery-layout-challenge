import "./MainStorage.css";
import { ChartStorage } from "../ChartStorage/ChartStorage";
import { DataStorage } from "../DataStorage/DataStorage";
export function MainStorage() {
  const data = [
    {
      type: "Documents",
      filesQuantity: 720,
      space: 75,
      color: "rgb(74, 194,157)",
    },
    {
      type: "Documents",
      filesQuantity: 720,
      space: 200,
      color: "rgb(255, 159, 0)",
    },
    {
      type: "Documents",
      filesQuantity: 720,
      space: 50,
      color: "rgb(188, 190, 202)",
    },
    {
      type: "Documents",
      filesQuantity: 720,
      space: 125,
      color: "rgb(104, 159, 248)",
    },
  ];

  return (
    <div className="main-storage">
      <ChartStorage values={[...data]} />
      <DataStorage values={[...data]} />
    </div>
  );
}
