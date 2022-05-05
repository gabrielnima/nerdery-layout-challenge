import { RecentlyUsedHeader } from "../RecentlyUsedHeader/RecentlyUsedHeader";
import { CardsContainer } from "../CardsContainer/CardsContainer";
import "./RecentlyUsed.css";
export function RecentlyUsed() {
  return (
    <div className="recently-used">
      <RecentlyUsedHeader />
      <CardsContainer />
    </div>
  );
}
