import { Header } from ".//../../Header/Header";
import { RecentFilesTable } from "../RecentFilesTable/RecentFilesTable";
import "./RecentFiles.css";
export function RecentFiles() {
  return (
    <div className="recent-files">
      <Header text={"Recent Files"} />
      <RecentFilesTable />
    </div>
  );
}
