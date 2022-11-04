import "./SpoilerTag.css";
import { useState } from "react";

function SpoilerTag(props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      className={`${revealed ? "spoiler-revealed" : "spoiler"}`}
      onClick={() => setRevealed(true)}
    >
      {props.children}
    </span>
  );
}

export default SpoilerTag;
