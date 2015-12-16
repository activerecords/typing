/// <reference path="../angular/angular.d.ts" />
/// <reference path="../phaser/phaser.d.ts" />
/// <reference path="../underscore.string/underscore.string.d.ts" />
var app;
(function (app) {
    var AppController = (function () {
        function AppController($timeout, $scope, $sce) {
            this.$timeout = $timeout;
            this.$scope = $scope;
            this.$sce = $sce;
            this.input = "";
            this.str = [];
            this.game = new Phaser.Game(0, 0, Phaser.AUTO, "phaser-example", { preload: this.preload.bind(this), create: this.create.bind(this) });
        }
        AppController.prototype.preload = function () {
            this.game.load.audio("type", "../sound/meka_ka_type02.mp3");
        };
        AppController.prototype.create = function () {
            this.type = this.game.add.audio("type");
            this.type.allowMultiple = true;
        };
        AppController.prototype.change = function () {
            $(".text-animated").text(this.input);
            this.type.play();
        };
        AppController.prototype.keydown = function ($event) {
            this.type.play();
            setTimeout(this.update.bind(this), 0);
        };
        AppController.prototype.update = function () {
            this.str = $(".text-input").val().split("");
            this.$scope.$apply();
        };
        return AppController;
    })();
    app.AppController = AppController;
})(app || (app = {}));
