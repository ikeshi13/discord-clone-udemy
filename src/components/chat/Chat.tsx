import React, { useState } from "react";

import "./Chat.scss";
import { useAppSelector } from "../../app/hooks";
import { db } from "../../firebase";
import useSubCollection from "../../hooks/useSubCollection";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SendIcon from "@mui/icons-material/Send";

import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from "firebase/firestore";

function Chat() {
  const [inputText, setInputText] = useState<string>("");
  const user = useAppSelector((state) => state.user.user);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  const sendMessage = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // フォーム送信時にページリロードを防ぐ
    e.preventDefault();
    // メッセージが空の場合は送信しない
    if (inputText === "") return;
    // channelsコレクションの中にあるmessagesコレクションの中にメッセージ情報を入れる
    const cllectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages");

    const docRef: DocumentReference<DocumentData> = await addDoc(cllectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
    setInputText("");
  };

  // Enterキーでsubmitされるのを防ぐ
  const stopEnterKeySubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div className="chat">
      {/**caht header */}
      <ChatHeader channelName={channelName} />
      {/**caht message */}
      <div className="chatMessage">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user} />
        ))}
      </div>
      {/**caht input */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form onClick={(e: React.MouseEvent<HTMLFormElement, MouseEvent>) => stopEnterKeySubmit(e)}>
          <input type="text" placeholder="#Udemyへメッセージを送信" value={inputText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>
        <div className="chatInputIcons" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => sendMessage(e)}>
          <SendIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
