import { useState } from "react";
import countSyllables from "./countSyllables";

const HorizontalLine = ({ ind, language }) => {
  const [text, updateText] = useState("");
  return (
    <div className="horizontalLine">
      <textarea
        key={`textarea-${ind}`}
        value={text}
        onChange={(e) => updateText(e.target.value || "")}
      />
      <div className="syllableLength">{countSyllables(language, text)}</div>
    </div>
  );
};

export default HorizontalLine;
