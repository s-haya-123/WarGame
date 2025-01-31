
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface Wall {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Wall extends Phaser.GameObjects.Rectangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.scaleX = 5.06938154103778;
		this.scaleY = 1.0351872454160105;
		scene.physics.add.existing(this, false);
		this.body.setSize(128, 128, false);
		this.isFilled = true;
		this.fillColor = 15501191;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	public generate(x: number, y: number) {
		this.setPosition(x, y);
		this.body.setVelocityY(100);
	}

	public overlapBullet() {
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
