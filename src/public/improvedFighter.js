import Fighter from "./fighter";

export class ImprovedFighter extends Fighter {
    constructor(name, power, health) {
        super(name, power, health);
    }
//override of base class function. Function hit() works like doubleHit()
    hit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}
