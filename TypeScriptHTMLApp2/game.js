var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Castlevania;
(function (Castlevania) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this, 800, 600, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Boot', Castlevania.Boot, false);
            _this.state.add('Preloader', Castlevania.Preloader, false);
            _this.state.add('MainMenu', Castlevania.MainMenu, false);
            _this.state.add('Level1', Castlevania.Level1, false);
            _this.state.start('Boot');
            return _this;
        }
        return Game;
    }(Phaser.Game));
    Castlevania.Game = Game;
})(Castlevania || (Castlevania = {}));
//# sourceMappingURL=Game.js.map