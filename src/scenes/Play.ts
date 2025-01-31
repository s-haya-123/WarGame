
// You can write more code here

import Bullet from "../components/Bullet";
import { decidePosition, generateWall } from "../components/generateWall";
import Wall from "../components/Wall";

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
		const charactor = this.add.sprite(704, 660, "charactor") as Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };
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
	private walls: Wall[] = [];
	private bullets: Bullet[] = [];

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

		this.time.addEvent(
			{
				delay: 2000,
				callback: () => {
					const wall = new Wall(this);
					this.add.existing(wall);
					const position = generateWall(decidePosition());
					wall.generate(position.x, position.y);
					this.walls.push(wall);
					this.physics.add.overlap(wall, this.bullets, (wall, bullet) => {
						wall.destroy();
						bullet.destroy();
					});
				},
				loop: true
			}	
		)
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
		this.bullets.push(bullet);
		bullet.fire(character.x, character.y);
		this.physics.add.overlap(bullet, this.walls, (bullet, wall) => { 
			bullet.destroy();
			wall.destroy();
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
