import { useState, useRef } from "react";
const Card = ({ item, handleReply, handleReplySubmit }) => {
  const [replyValue, setReplyValue] = useState("");
  const [isReplyvisible, setReplyVisible] = useState("false");
  return (
    <div className="card">
      <div>{item.value}</div>
      <div>
        <span onClick={() => handleReply(item.key)}>reply</span>
        <span>edit</span>
        <span>delete</span>
      </div>
      {item.isReplyVisible && (
        <>
          <input
            type="text"
            value={replyValue}
            onChange={(e) => setReplyValue(e.target.value)}
          />
          <button onClick={() => handleReplySubmit(item.key)}>Submit</button>
        </>
      )}
      {item.replies.length > 0 &&
        item.replies.map((reply) => <Card item={reply} />)}
    </div>
  );
};
export default Card;
