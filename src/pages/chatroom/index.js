import React from "react";
import classes from "./style.module.css";
import Container from "../../components/templates/structures/container";
import Join from "../../components/chatroom/join";
import Chat from "../../components/chatroom/chat";

function ChatRoom() {
	return (
		<Container styles={`${classes.chatroomContainer}`}>
			<Join styles={`${classes.joinElement}`} />
			<Chat styles={`${classes.chatElement}`} />
		</Container>
	);
}

export default ChatRoom;
