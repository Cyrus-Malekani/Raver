class Menu extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'Menu', active: false});
    }

    init ()
    {
        this.CONFIG = this.sys.game.CONFIG;
    }

    preload ()
    {

    }

    create ()
    {
        this.text = this.add.text(this.CONFIG.centerX - 18, this.CONFIG.centerY, 'Menu').setColor('#000000');
    }
}