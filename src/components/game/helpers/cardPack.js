const suites = ["Pique", "Coeur", "Trefle", "Carreau"];

const valeurs = [
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
	"A",
];

const getCardName = (value, suite) => {
	return value + "_" + suite;
};

export default () => {
	let pack = [];

	for (let i = 0; i < suites.length; i++) {
		for (let j = 0; j < valeurs.length; j++) {
			pack.push(getCardName(valeurs[j], suites[i]));
		}
	}

	return pack;
};
