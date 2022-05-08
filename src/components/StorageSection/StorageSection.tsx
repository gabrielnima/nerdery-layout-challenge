import "./StorageSection.css";
import { StorageHeader } from "../StorageHeader/StorageHeader";
import { MainStorage } from "../MainStorage/MainStorage";
import { BuySection } from "../BuySection/BuySection";
export function StorageSection() {
  return (
    <div className="storage-section">
      <StorageHeader name="Gabriel" />
      <MainStorage />
      <BuySection />
    </div>
  );
}
