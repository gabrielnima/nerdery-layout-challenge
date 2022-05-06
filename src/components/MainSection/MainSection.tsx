import { SearchBar } from "../SearchBar/SearchBar";
import { RecentlyUsed } from "../RecentlyUsed/RecentlyUsed";
import { RecentFiles } from "../RecentFiles/RecentFiles";
import { ShareWithMe } from "../ShareWithMe/ShareWithMe";
import "./MainSection.css";

export function MainSection() {
  return (
    <div className="main-section">
      <SearchBar />
      <RecentlyUsed />
      <RecentFiles />
      <ShareWithMe />
    </div>
  );
}
