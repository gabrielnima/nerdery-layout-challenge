import { RecentFilesHeader } from "../RecentFilesHeader/RecentFilesHeader";
import { RecentFilesTable } from "../RecentFilesTable/RecentFilesTable";
import "./RecentFiles.css";
export function RecentFiles() {
  return (
    <div className="recent-files">
      <RecentFilesHeader />
      <RecentFilesTable />
    </div>
  );
}
