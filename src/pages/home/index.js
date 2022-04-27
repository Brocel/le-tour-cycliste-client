import Container from "../../components/templates/structures/container";
import Header from "../../components/templates/structures/header";
import Welcome from "../../components/home/welcome";
import Title from "../../components/templates/structures/title";
import ButtonEnter from "../../components/templates/buttons/ButtonEnter";

function Home() {
	const title = "Le Tour Cycliste";
	const userName = "Laurent Jalabert";

	return (
		<Container>
			<Header>
				<Title styles='my-5' title={title}></Title>
			</Header>
			<Welcome userName={userName}></Welcome>
			<ButtonEnter />
		</Container>
	);
}

export default Home;
