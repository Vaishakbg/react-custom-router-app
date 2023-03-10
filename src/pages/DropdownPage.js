import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState(null);
  const options = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
  ];

  const handleSelection = (option) => {
    setSelection(option);
  };
  return (
    <div className="flex">
      <Dropdown
        label="Select Color"
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default DropdownPage;
