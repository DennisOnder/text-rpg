var bear;

function Enemy(name, strength) {
    this.name = name;
    this.power = strength * 2;
    this.health = this.power * 10;
    this.attack = Math.floor(Math.random() * 5) * this.power / 4;
}
