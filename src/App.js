import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

const App = () => {
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState("");

  const handleData = (event) => {
    setCopied(false)
    setData(event.target.value);
  };

  return (
    <div className="copy-paste-block">
      <h2>React Copy To Clipboard Example</h2>
      <div className="copy-block">
        <input
          type="text"
          value={data}
          onChange={handleData}
          placeholder="Type Something to Copy"
          required
        />
        <CopyToClipboard text={data} onCopy={() => setCopied(true)}>
          <button>Click to Copy</button>
        </CopyToClipboard>
        {copied ? <p>Copied !</p> : null}
      </div>
      <div className="paste-block">
        <input type="text" placeholder="Paste the Clipboard" />
      </div>
    </div>
  );
};

export default App;
