import { DataStorageItem } from "../DataStorageItem/DataStorageItem";
import "./DataStorage.css";
interface PropsDataStorageTypes {
  values: {
    type: string;
    filesQuantity: number;
    space: number;
    color: string;
  }[];
}
export function DataStorage({ values }: PropsDataStorageTypes) {
  const orderedArray = values.sort((actual, prox) => prox.space - actual.space);
  console.log(orderedArray);
  return (
    <div className="data-storage">
      {orderedArray.map((item, index) => (
        <DataStorageItem
          key={index}
          color={item.color}
          space={item.space}
          type={item.type}
          quantityFiles={item.filesQuantity}
        />
      ))}
    </div>
  );
}
