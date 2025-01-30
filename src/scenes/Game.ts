import Phaser from "phaser";

export default class Game extends Phaser.Scene {

	constructor() {
		super("Game");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// image_1
		const image_1 = this.add.image(638, 307, "gameBackground");
		image_1.scaleX = 1.305707420481132;

		// charactor
		const charactor = this.add.sprite(704, 660, "DALL·E Jan 30 2025") as Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };
		charactor.scaleX = 0.11595452439536336;
		charactor.scaleY = 0.11595452439536336;
		this.physics.add.existing(charactor, false);
		charactor.body.allowGravity = false;
		charactor.body.setSize(1024, 1024, false);
		charactor.play("");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update(time: number, delta: number): void {

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
