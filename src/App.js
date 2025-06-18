import { useState, useRef } from "react";
import Card from "./card";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const keyRef = useRef(0);
  const handleClick = () => {
    const comment = {
      value: inputValue,
      isReplyvisible: false,
      replies: [],
      key: keyRef.current,
    };
    keyRef.current++;
    setData((prevData) => [...prevData, comment]);
  };
  const handleReply = (key) => {
    const updatedData = [...data];
    updatedData.forEach((item) => {
      if (item.key === key) {
        item.isReplyVisible = true;
      }
    });

    setData([...updatedData]);
  };
  const handleReplySubmit = (key) => {
    const updatedData = [...data];
    updatedData.forEach((item) => {
      if (item.key === key) {
        console.log(key);
        item.isReplyVisible = false;
        item.replies.push({
          value: replyValue,
          isReplyvisible: false,
          replies: [],
          key: keyRef.current,
        });
        keyRef.current++;
      }
    });
    console.log(updatedData);
    setData([...updatedData]);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
      {data.map((item) => (
        <Card
          item={item}
          handleReply={handleReply}
          handleReplySubmit={handleReplySubmit}
        />
      ))}
    </div>
  );
}
