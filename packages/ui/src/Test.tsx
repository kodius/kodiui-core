import { testComponentStyle, testComponentStyle2 } from "./testComponent.css";

export const Test = () => {
  return (
    <div>
      <div className={testComponentStyle}>Test Component 1</div>
      <div className={testComponentStyle2}>Test Component 2</div>
    </div>
  );
};
