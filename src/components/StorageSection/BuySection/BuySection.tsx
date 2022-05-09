import "./BuySection.css";
import { OptionButton } from "../../MainSection/OptionButton/OptionButton";
export function BuySection() {
  return (
    <div className="buy-section">
      <div className="buy-section__rectangle"></div>
      <div className="buy-section__text">
        <p className="buy-section__buy-text">Buy more space now!</p>
        <p className="buy-sextion__buy-text buy-section__buy-text--upgrade">
          Upgrade to cloud premium
        </p>
      </div>
      <OptionButton text="Upgrade Account!" />
    </div>
  );
}
