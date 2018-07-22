// create async function fight
export default async function fight(fighter, improvedFighter, ...point) {
    let counter = 0;
    let result = "";
    let fighters = [fighter,improvedFighter];
    while (counter<point.length) {
        let i1 = counter % 2;
        let i2 = (counter+1)%2;

        if (fighters[i1].health>0) {
            result = fighters[i1].hit(fighters[i2], point[counter]);
        }
        else if (fighters[i1].health<=0) {
            let promise = fighters[i1].knockout(fighters[i2], point[counter]);

            await promise.then(result => {
                console.log("Fighter " + fighters[i1].name + " is in knockout !");
                console.log("The winner of the fight is " + fighters[i2].name + " !");
            });

            if (result == "over") console.log("Game is over");
            return;
        }
        counter++;
    }
}

