import { useState, useEffect } from "react";
import HorizontalLine from "./HorizontalLine";

const HorizontalLines = ({ language }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (!lines.length) {
      setLines([0, 1, 2]);
    }
  }, [lines]);

  return (
    <div className="lines">
      <div className="horizontalLines">
        {lines.map((lineNumber) => (
          <HorizontalLine
            key={lineNumber}
            ind={lineNumber}
            language={language}
          />
        ))}
      </div>
      <div className="manageLines d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          className="removeButton btn btn-primary"
          onClick={() => {
            if (lines.length > 1) {
              lines.pop();
              setLines([...lines]);
            }
          }}
        >
          -
        </button>
        <button
          className="addButton btn btn-primary"
          onClick={() => {
            if (lines.length < 3) {
              setLines(lines.concat([lines.length]));
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default HorizontalLines;
