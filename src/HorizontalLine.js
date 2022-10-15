import { useState } from "react";
import countSyllables from "./countSyllables";

const HorizontalLine = ({ ind, language }) => {
  const [text, updateText] = useState("");
  return (
    <div className="horizontalLineContainer input-group mb-3">
      <input
        type="text"
        className="horzontalLine form-control"
        aria-label={`line-${ind}`}
        onChange={(e) => updateText(e.target.value) || ""}
      />
      <span className="syllableCount input-group-text">
        {countSyllables(language, text)}
      </span>
    </div>
  );
};

export default HorizontalLine;
