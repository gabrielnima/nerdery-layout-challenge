import { RecentFilesHeaderTable } from "../RecentFilesHeaderTable/RecentFilesHeaderTable";
import { RecentFilesTableItem } from "../RecentFilesTableItem/RecentFilesTableItem";
import "./RecentFilesTable.css";
export function RecentFilesTable() {
  const data = [
    {
      color: "#FF9F00",
      title: "Travel Landing Page",
      membersQuantity: 5,
      lastModified: "Mar 8, 2020",
    },
    {
      color: "#4AC29D",
      title: "True Photos",
      membersQuantity: 12,
      lastModified: "Mar 8, 2020",
    },
    {
      color: "#FF6860",
      title: "Dashboard Structure",
      membersQuantity: 10,
      lastModified: "Mar 9, 2020",
    },
    {
      color: "#FF9F00",
      title: "Character Illustation",
      membersQuantity: 3,
      lastModified: "Mar 10, 2020",
    },
  ];
  return (
    <div className="recent-files-table">
      <RecentFilesHeaderTable />
      <div className="recent-files-container">
        {data.map((item) => (
          <RecentFilesTableItem
            color={item.color}
            title={item.title}
            membersQuantity={item.membersQuantity}
            lastModified={item.lastModified}
          />
        ))}
      </div>
    </div>
  );
}
