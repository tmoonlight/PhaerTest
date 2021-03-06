﻿/// <reference path="phaser.d.ts"/>
class Greeter {
    //element: HTMLElement;
    //span: HTMLElement;

    //HTMLElement 就是dom对象，好比winform里操作控件一样
    //timerToken: number;
    game: Phaser.Game
    platforms: Phaser.Group
    player: Phaser.Sprite
    constructor() {
        //this.element = element;
        //this.element.innerHTML += "The time is: ";
        //this.span = document.createElement('span');
        //this.element.appendChild(this.span);
        //this.span.innerText = new Date().toUTCString();
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
            preload: this.preload, create: this.create, update: this.update
        });


    }
    //加载资源
    preload() {
        this.game.load.image('logo', '1.png');
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.spritesheet('baddie', 'assets/baddie.png', 32, 48);
        this.game.load.image('diamond', 'assets/diamond.png');
        this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        this.game.load.image('platform', 'assets/platform.png');
        this.game.load.image('star', 'assets/star.png');
    }

    create() {
        // var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');

        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        var sky = this.game.add.sprite(0, 0, 'sky');
        //var star = this.game.add.sprite(20, 20, 'star');
        this.platforms = this.game.add.group();

        //
        this.platforms.enableBody = true;
        var ground = this.platforms.create(0, this.game.world.height-64, 'platform');
        // this.game.add.sprite(0, 0, sky);
        //logo.anchor.setTo(0.5, 0.5);
        //logo.scale.setTo(1, 1);

        ground.scale.setTo(2, 2)
        ground.body.immovable = true;
        //  Now let's create two ledges
        var ledge = this.platforms.create(400, 400, 'platform');
        ledge.body.immovable = true;
        ledge = this.platforms.create(-150, 250, 'platform');
        ledge.body.immovable = true;
        var starobj = this.platforms.create(0, 0, 'star');
        starobj.body.bounce.y = 0.2;
        starobj.body.gravity.y = 300;
       // starobj.body.immovable = true;
        this.platforms.create(10, 20, 'star');
        this.platforms.create(40, 40, 'star');
        // The player and its settings
        this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');
        //  We need to enable physics on the player
        this.game.physics.arcade.enable(this.player);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        //以下设置为true 则不可逾越过屏幕
        this.player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);
        //  this.game.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
    }

    update() {
        var cursors = this.game.input.keyboard.createCursorKeys();
        this.game.physics.arcade.collide(this.player, this.platforms);


        //  Reset the players velocity (movement)
        this.player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            //  Move to the left
            this.player.body.velocity.x = -150;

            this.player.animations.play('left');
        }
        else if (cursors.right.isDown) {
            //  Move to the right
            this.player.body.velocity.x = 150;

            this.player.animations.play('right');
        }
        else {
            //  Stand still
            this.player.animations.stop();

            this.player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown /*&& this.player.body.touching.down*/) {
            this.player.body.velocity.y = -350;
        }
    }
    ////tesdt
    //start() {

    //    // this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    //}

    //stop() {
    //    clearTimeout(this.timerToken);
    //}

}

window.onload = () => {
    //var el = document.getElementById('content');
    //var greeter = new Greeter();
    //var game = new Greeter();
    //greeter.start();
};