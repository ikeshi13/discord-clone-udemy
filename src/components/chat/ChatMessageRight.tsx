import React from "react";
import "./ChatMessageRight.scss";
import { Avatar } from "@mui/material";
import { Timestamp } from "firebase/firestore";

type Props = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

const ChatMessageRight = (props: Props) => {
  const { message, timestamp, user } = props;
  return (
    <div className="message">
      <div className="messageInfo">
        <h4>
          <span className="messageTimestamp">{new Date(timestamp?.toDate()).toLocaleString()}</span>
          {user?.displayName}
        </h4>
        <p className="me">{message}</p>
      </div>
      <Avatar src={user?.photo} />
    </div>
  );
};

export default ChatMessageRight;
