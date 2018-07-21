// Create class Fighter
export default class Fighter {
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log("The health is lost");
            this.knockout();
        } else console.log("health: ", this.health);
    }

    hit(enemy, point) {
        this.damage = point * this.power;
        enemy.setDamage(this.damage);
    }

    knockout() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("time is over");
                resolve("time is over");
            }, 500);
        });
        return promise;
    }
}

