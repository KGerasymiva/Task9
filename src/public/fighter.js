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
            console.log("The ",this.name,"'s health is lost");
            return this.knockout();
        } else console.log("The", this.name, "'s health", this.health);
    }

    hit(enemy, point) {
        console.log("Fighter ", this.name, " hit ", enemy.name );
        let damage = point * this.power;
        console.log("and made him damage" , damage);
        return enemy.setDamage(damage);
    }

    knockout() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Time is over", this.name);
                resolve("over");
            }, 500);
        });
        return promise;
    }
}

