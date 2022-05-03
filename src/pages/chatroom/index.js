import React from "react";
import classes from "./style.module.css";
import Container from "../../components/templates/structures/container";

function ChatRoom() {
	return (
		<Container styles={`${classes.chatroomContainer}`}>
			<div
				className={`${classes.chatroomElement}`}
			></div>
			<div
				className={`${classes.chatroomElement}`}
			></div>
			<div
				className={`${classes.chatroomElement}`}
			></div>
		</Container>
	);
}

export default ChatRoom;
