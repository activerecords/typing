/// <reference path="../angular/angular.d.ts" />
/// <reference path="../phaser/phaser.d.ts" />
/// <reference path="../underscore.string/underscore.string.d.ts" />

declare var JQuery: any

module app {
  export class AppController {
    private game: Phaser.Game
    private type: any
    private input: string = ""
    private str: string[] = []

    constructor(private $timeout: ng.ITimeoutService, private $scope: ng.IRootScopeService, private $sce) {
      this.game = new Phaser.Game(0, 0, Phaser.AUTO, "phaser-example", { preload: this.preload.bind(this), create: this.create.bind(this) })
    }

    private preload() {
      this.game.load.audio("type", "../sound/meka_ka_type02.mp3")
    }

    private create() {
      this.type = this.game.add.audio("type")
      this.type.allowMultiple = true
    }

    public change() {
      $(".text-animated").text(this.input)

      this.type.play()
    }

    public keydown($event) {
      this.type.play()

      setTimeout(this.update.bind(this), 0)
    }

    private update() {
      this.str = $(".text-input").val().split("")
      this.$scope.$apply()
    }
  }
}
