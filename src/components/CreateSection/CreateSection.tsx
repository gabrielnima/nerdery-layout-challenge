import { CreateSectionItem } from "../CreateSectionItem/CreateSectionItem";
import "./CreateSection.css";
export function CreateSection() {
  const options = [
    { text: "Upload Files" },
    { text: "Upload Folder" },
    { text: "New Folder" },
    { text: "Files More" },
  ];
  return (
    <div className="create-section">
      {options.map((option) => (
        <CreateSectionItem text={option.text} />
      ))}
      <div className="create-section__triangle"></div>
    </div>
  );
}
