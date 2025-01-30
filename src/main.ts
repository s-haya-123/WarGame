import Phaser from "phaser";
import Title from "./scenes/Title";
import Preload from "./scenes/Preload";
import Play from "./scenes/Play";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		width: 1280,
		height: 720,
		backgroundColor: "#2f2f2f",
		parent: "game-container",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		physics: {
        default: 'arcade',
        arcade: {
        }
    },
		scene: [Boot, Preload, Title, Play]
	});

	game.scene.start("Boot");
});