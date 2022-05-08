import horizontalPoints from "../../assets/images/horizontalPoints.svg";
import "./RecentFilesTableItem.css";
interface PropsRecentFilesTableItem {
  color: string;
  title: string;
  membersQuantity: number;
  lastModified: string;
}

export type Style = {
  [key: string]: React.CSSProperties;
};

export function RecentFilesTableItem({
  color,
  title,
  membersQuantity,
  lastModified,
}: PropsRecentFilesTableItem) {
  const styles: Style = {
    square: {
      backgroundColor: color,
    },
  };

  return (
    <div className="recent-files-table-item">
      <div className="recent-files-table-item__name">
        <div
          className="recent-files-table-item__square"
          style={styles.square}
        ></div>
        <p className="recent-files-table-item__title">{title}</p>
      </div>

      <p className="recent-files-table-item__members">
        {membersQuantity} members
      </p>
      <p className="recent-files-table-item__modified">{lastModified}</p>
      <img src={horizontalPoints} alt="horizontal points" />
    </div>
  );
}
