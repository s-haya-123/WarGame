
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bullet extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "bullet", frame);

		this.scaleX = 0.06801335624826843;
		this.scaleY = 0.06801335624826843;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	public fire(x: number, y: number) {
		this.setPosition(x, y);
		this.setVelocityY(-200);
		console.log("fire");
	}

	update(): void {
		if(this.y < 0) {
			this.destroy();
			console.log("destroy");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
