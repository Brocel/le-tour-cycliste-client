import Card from "./card";
import CardPack from "./cardPack";

export default class Dealer {
	constructor(scene) {
		this.mixCards = () => {
			let cardPack = CardPack();
			this.mixedCardPack = [];
			while (cardPack.length > 0) {
				let k = Math.floor(
					Math.random() * cardPack.length
				);
				let currentCard = cardPack[k];
				this.mixedCardPack.push(currentCard);
				cardPack.splice(k, 1);
			}
		};

		this.dealCards = (playerCount) => {
			console.log("Cards Deal Start...");
      let opponentSprite = "backCard";
      let packLength = this.mixedCardPack.length;
			console.log("...Cards Deal End");
		};
	}
}
