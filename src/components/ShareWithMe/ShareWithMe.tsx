import { Header } from "../Header/Header";
import { ShareWithMeCardContainer } from "../ShareWithMeCardContainer/ShareWithMeCardContainer";
import "./ShareWithMe.css";
export function ShareWithMe() {
  return (
    <div className="share-with-me">
      <Header text="Share with me" />
      <ShareWithMeCardContainer />
    </div>
  );
}
