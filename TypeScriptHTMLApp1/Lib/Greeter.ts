/// <reference path="phaser.d.ts"/>
module StarTravelling {
    class Greeter {
        //element: HTMLElement;
        //span: HTMLElement;

        //HTMLElement 就是dom对象，好比winform里操作控件一样
        //timerToken: number;
        game: Phaser.Game
        platforms: Phaser.Group
        player: Phaser.Sprite
        debugText: Phaser.Text
        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
                preload: this.preload, create: this.create, update: this.update, render: this.render
            });


        }
        //加载资源
        preload() {
            this.game.load.image('logo', '1.png');
            this.game.load.image('sky', 'assets/sky.png');
            //this.game.load.spritesheet('baddie', 'assets/baddie.png', 32, 48);
            //this.game.load.image('diamond', 'assets/diamond.png');
            //this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
            //this.game.load.image('platform', 'assets/platform.png');
            //this.game.load.image('star', 'assets/star.png');
        }

        create() {
            //var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            var sky = this.game.add.sprite(0, 0, 'sky');
          //  alert('tye');
            this.game.physics.startSystem(Phaser.Physics.ARCADE)
            this.debugText = this.game.add.text(60, 60, "this is text");
        }

        update(e) {
            var world: World = new World();
            //console.log(deltaTime);
            //console.log(this.game.time.elapsed)
            //world.update(1);
           

        }
        render(e)
        {
            //alert('test')
         //   console.log(e);
            this.debugText.text = this.game.time..toString();
        }
        ////tesdt
        start() {

            // this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        }

        //stop() {
        //    clearTimeout(this.timerToken);
        //}

    }

    window.onload = () => {
        alert('tes9t');
        var el = document.getElementById('content');
        // var greeter = new Greeter();
        var game = new Greeter();
        // greeter.start();
    };
}