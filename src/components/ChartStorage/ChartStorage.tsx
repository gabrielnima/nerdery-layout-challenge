import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./ChartStorage.css";

ChartJS.register(ArcElement, Tooltip, Legend);
interface PropsChartStorage {
  values: {
    space: number;
    color: string;
  }[];
}

export function ChartStorage({ values }: PropsChartStorage) {
  const totalSpace: number = 500;
  const spaceArray: number[] = values.map((value) => value.space);
  const colorsArray: string[] = values.map((value) => value.color);
  const usedSpace: number = spaceArray.reduce(
    (accumulator, curr) => accumulator + curr
  );

  const data = {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [...spaceArray],
        backgroundColor: [...colorsArray],
        hoverOffset: 4,
        cutout: "90%",
        borderRadius: 60,
        rotation: 10,
        spacing: 15,
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    events: [],
  };
  return (
    <div className="chart-storage">
      <h2 className="chart-storage__title">Storage</h2>
      <div className="chart-storage__chart">
        <Doughnut data={data} options={options} />
        <div className="percentage-container">
          <p className="percentage-container__value">
            {(usedSpace * 100) / totalSpace}{" "}
            <span className="percentage-symbol">%</span>
          </p>
          <p className="percentage-container__text">Used</p>
        </div>
        <p className="chart-storage__info">
          {" "}
          {usedSpace}GB of {totalSpace}GB used
        </p>
        <div className="dataChart"></div>
      </div>
    </div>
  );
}
