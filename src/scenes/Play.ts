
// You can write more code here

import Bullet from "../components/Bullet";

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Play extends Phaser.Scene {

	constructor() {
		super("Play");

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
		charactor.blendMode = Phaser.BlendModes.SKIP_CHECK;
		charactor.scaleX = 0.11595452439536336;
		charactor.scaleY = 0.11595452439536336;
		this.physics.add.existing(charactor, false);
		charactor.body.friction.x = 10;
		charactor.body.collideWorldBounds = true;
		charactor.body.setSize(1024, 1024, false);
		charactor.play("");

		// lists
		const charactors = [charactor];

		this.charactors = charactors;

		this.events.emit("scene-awake");
	}

	private charactors!: Phaser.GameObjects.Sprite[];

	/* START-USER-CODE */

	// Write your code here
	private character?: Phaser.GameObjects.Sprite & {
		body: Phaser.Physics.Arcade.Body;
	};

	create() {
		this.editorCreate();
		if(this.charactors.length > 0) {
			this.character = this.charactors[0] as Phaser.GameObjects.Sprite & {
				body: Phaser.Physics.Arcade.Body;
			};
		}
	}

	update(time: number, delta: number): void {
		this.character && this.moveCharacter(this.character);
	}


	private moveCharacter(character: Phaser.GameObjects.Sprite & {
		body: Phaser.Physics.Arcade.Body;
	}) {
		const cursors = this.input.keyboard?.createCursorKeys();
		if(!cursors) {
			return;
		}
		if(cursors.left.isDown) {
			character.body.setVelocityX(-160);
		} else if(cursors.right.isDown) {
			character.body.setVelocityX(160);
		} else {
			character.body.setVelocityX(0);
		}

		cursors.space.onDown = () => this.createBullet(character);

	}


	private createBullet(character: Phaser.GameObjects.Sprite & {
		body: Phaser.Physics.Arcade.Body;
	}) {
		const bullet = new Bullet(this, character.x, character.y);
		this.add.existing(bullet);
		this.physics.add.existing(bullet);
		this.add.group(bullet, { runChildUpdate: true });
		bullet.fire(character.x, character.y);
		// const bullet = this.physics.add.sprite(character.x, character.y, "bullet");
		// bullet.scaleX = 0.08;
		// bullet.scaleY = 0.08;
		// bullet.setVelocityY(-200);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
