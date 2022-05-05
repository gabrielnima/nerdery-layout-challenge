import horizontalPoints from "../../assets/images/horizontalPoints.svg";
import "./RecentFilesTableItem.css";
interface PropsRecentFilesTableItem {
  color: string;
  title: string;
  membersQuantity: number;
  lastModified: string;
}

type Style = {
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
      width: 21,
      height: 21,
      backgroundColor: color,
      borderRadius: 5,
      marginLeft: 13,
    },
    title: {
      color: "#343951",
      fontWeight: 400,
      fontSize: 12,
    },
  };

  return (
    <div className="recent-files-table-item">
      <div className="recent-files-table-item__name">
        <div
          className="recent-files-table-item__square"
          style={styles.square}
        ></div>
        <p className="recent-files-table-item__title" style={styles.title}>
          {title}
        </p>
      </div>

      <p className="recent-files-table-item__members">
        {membersQuantity} members
      </p>
      <p className="recent-files-table-item__modified">{lastModified}</p>
      <img src={horizontalPoints} alt="horizontal points" />
    </div>
  );
}
