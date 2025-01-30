
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// ______________________Jan_30_2025
		const ______________________Jan_30_2025 = this.add.image(0, 0, "デフォルメキャラリクエスト ゲーム背景 Jan 30 2025");
		______________________Jan_30_2025.scaleX = 1.2489809409725727;
		______________________Jan_30_2025.scaleY = 0.8267346463681621;
		______________________Jan_30_2025.setOrigin(0, 0);

		// TitleLayer
		const titleLayer = this.add.layer();
		titleLayer.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(324, 323, 128, 128);
		rectangle_1.scaleX = 4.958887599457315;
		rectangle_1.scaleY = 0.8468668568917865;
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 10464349;
		titleLayer.add(rectangle_1);

		// glowFx
		rectangle_1.postFX!.addGlow(16777215, 4, 0, false, 0.1, 10);

		// War
		const war = this.add.text(336, 320, "", {});
		war.text = "Simple War";
		war.setStyle({ "fontSize": "100px", "fontStyle": "bold italic", "shadow.offsetX": 10, "shadow.offsetY": 10, "shadow.fill": true });
		titleLayer.add(war);

		// Button
		const button = this.add.layer();
		button.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// text_1
		const text_1 = this.add.text(524, 453, "", {});
		text_1.text = "Start";
		text_1.setStyle({ "color": "#739941ff", "fontSize": "80px", "fontStyle": "bold", "strokeThickness": 10, "shadow.stroke": true });
		button.add(text_1);

		// scriptnode_1
		new ScriptNode(text_1);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.input.on("pointerdown", () => {
			this.scene.start("Play");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
