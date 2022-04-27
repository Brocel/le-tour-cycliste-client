import { io } from "socket.io-client";
import Phaser from "phaser";
import CardPack from "../helpers/cardPack";
import Zone from "../helpers/zone";
import Dealer from "../helpers/dealer";
import Card from "../helpers/card";

export default class Game extends Phaser.Scene {
	constructor() {
		super({
			key: "Game",
		});
	}

	preload() {
		this.cardPack = CardPack();

		this.cardPack.forEach((card) => {
			this.load.image(
				card,
				"src/assets/cards/" + card + ".svg"
			);
		});
		this.load.image(
			"backCard",
			"src/assets/cards/0_Back.svg"
		);
		this.load.image(
			"carreau",
			"src/assets/cards/0_Carreau.png"
		);
		this.load.image(
			"pique",
			"src/assets/cards/0_Pique.png"
		);
		this.load.image(
			"coeur",
			"src/assets/cards/0_Coeur.png"
		);
		this.load.image(
			"trefle",
			"src/assets/cards/0_Trefle.png"
		);

		this.load.image(
			"maillotJaune",
			"src/assets/images/shirt_yellow.png"
		);
		this.load.image(
			"maillotVert",
			"src/assets/images/shirt_green.png"
		);
		this.load.image(
			"maillotPoisRouge",
			"src/assets/images/shirt_red_dots.png"
		);
	}

	create() {
		this.zone = new Zone(this);
		this.dropZone = this.zone.renderZone();
		this.outline = this.zone.renderOutline(
			this.dropZone
		);

		this.playerId = "";
		this.isActive = false;
		this.playerCards = [];
		this.opponentCards = [];

		this.dealer = new Dealer(this);

		let self = this;

		const socket = io("http://localhost:3000");

		socket.on("connect", function () {
			console.log(socket.id + " Connected!");
			this.playerId = socket.id;
		});

		socket.on("isActive", function () {
			self.isActive = true;
		});

		socket.on("dealCards", function () {
			self.dealer.mixCards();
			self.dealer.dealCards();
			self.dealText.disableInteractive();
		});

		socket.on(
			"cardPlayed",
			function (gameObject, isPlayerA) {
				if (isPlayerA !== self.isActive) {
					let sprite = gameObject.textureKey;
					self.opponentCards.shift().destroy();
					self.dropZone.data.values.cards++;
					let card = new Card(self);
					card
						.render(
							self.dropZone.x -
								350 +
								self.dropZone.data.values.cards * 50,
							self.dropZone.y,
							sprite
						)
						.disableInteractive();
				}
			}
		);

		this.dealText = this.add
			.text(75, 350, ["DEAL CARDS"])
			.setFontSize(18)
			.setFontFamily("Trebuchet MS")
			.setColor("#00ffff")
			.setInteractive();

		this.dealText.on("pointerdown", function () {
			socket.emit("dealCards");
		});

		this.dealText.on("pointerover", function () {
			self.dealText.setColor("#ff69b4");
		});

		this.dealText.on("pointerout", function () {
			self.dealText.setColor("#00ffff");
		});

		this.input.on(
			"drag",
			function (pointer, gameObject, dragX, dragY) {
				gameObject.x = dragX;
				gameObject.y = dragY;
			}
		);

		this.input.on(
			"dragstart",
			function (pointer, gameObject) {
				gameObject.setTint(0xff69b4);
				self.children.bringToTop(gameObject);
			}
		);

		this.input.on(
			"dragend",
			function (pointer, gameObject, dropped) {
				gameObject.setTint();
				if (!dropped) {
					gameObject.x = gameObject.input.dragStartX;
					gameObject.y = gameObject.input.dragStartY;
				}
			}
		);

		this.input.on(
			"drop",
			function (pointer, gameObject, dropZone) {
				dropZone.data.values.cards++;
				gameObject.x =
					dropZone.x -
					350 +
					dropZone.data.values.cards * 50;
				gameObject.y = dropZone.y;
				gameObject.disableInteractive();
				self.socket.emit(
					"cardPlayed",
					gameObject,
					self.isPlayedA
				);
			}
		);
	}

	update() {}
}
