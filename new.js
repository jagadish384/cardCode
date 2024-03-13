import { useState } from "react";

export default function New() {
  const [showName, setShowName] = useState([
    {
      name: "AddName 1",
    },
  ]);
  return (
    <div>
      <button
        onClick={() => {
          setShowName([
            ...showName,
            { name: `AddName ${showName.length + 1}` },
          ]);
        }}
      >
        Names
      </button>
      <ul>
        {showName.map((ele, i) => {
          return (
            <li key={i}>
              {ele.name}
              <button
                onClick={() => {
                  showName.splice(i, 1);
                  setShowName([...showName]);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
