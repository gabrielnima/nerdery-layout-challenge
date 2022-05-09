import "./RecentFilesHeaderTable.css";
export function RecentFilesHeaderTable() {
  return (
    <div className="recent-files-header-table">
      <p className="recent-files-header-table__text recent-files-header-table__text--name">
        Name
      </p>

      <p className="recent-files-header-table__text recent-files-header-table__text--members">
        Members
      </p>

      <p className="recent-files-header-table__text recent-files-header-table__text--modified">
        Last Modified
      </p>
    </div>
  );
}
