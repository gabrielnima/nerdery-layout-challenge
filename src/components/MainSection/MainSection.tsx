import { SearchBar } from "../SearchBar/SearchBar";
import { RecentlyUsed } from "../RecentlyUsed/RecentlyUsed";
import { RecentFiles } from "../RecentFiles/RecentFiles";
import "./MainSection.css";

export function MainSection() {
  return (
    <div className="main-section">
      <SearchBar />
      <RecentlyUsed />
      <RecentFiles />
    </div>
  );
}
