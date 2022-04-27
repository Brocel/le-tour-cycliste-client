import Container from "../../components/structures/container";
import Header from "../../components/structures/header";
import Welcome from "../../components/home/welcome";
import Title from "../../components/structures/title";

function Home() {
	const title = "Le Tour Cycliste";
	const userName = "Laurent Jalabert";

	return (
		<>
			<Container>
				<Header>
					<Title styles='my-5' title={title}></Title>
				</Header>
				<Welcome userName={userName}></Welcome>
				<ButtonEnter />
			</Container>
		</>
	);
}

export default Home;
