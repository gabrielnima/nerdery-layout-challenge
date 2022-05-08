import "./DataStorageItem.css";
interface PropsDataStorageItemTypes {
  type: string;
  quantityFiles: number;
  color: string;
  space: number;
}
export function DataStorageItem({
  color,
  space,
  type,
  quantityFiles,
}: PropsDataStorageItemTypes) {
  return (
    <div className="data-storage-item">
      <div
        className="data-storage__square"
        style={{ backgroundColor: color }}
      ></div>
      <div className="data-storage__info">
        <p className="data-storage__type">{type}</p>
        <p className="data-storage__quantity">{quantityFiles} files</p>
      </div>
      <div className="data-storage__space">
        <p className="data-storage__text">{space} GB</p>
      </div>
    </div>
  );
}
