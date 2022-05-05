import "./SideBar.css";
import { SideBarList } from "../SideBarList/SideBarList";
import { CreateSection } from "../CreateSection/CreateSection";
import { OptionButton } from "../OptionButton/OptionButton";
import union from "../../assets/images/union.svg";
export function SideBar() {
  return (
    <div className="side-bar">
      <SideBarList />
      <CreateSection />
      <OptionButton text="Create New" img={union} />
    </div>
  );
}
