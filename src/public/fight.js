// create async function fight
export default async function fight(fighter, improvedFighter, ...point) {
    let counter = 0;
    console.log("1");
    let result = "";
    while (1) {
        if (counter%2===0) {
            result = await fighter.hit(improvedFighter, point[counter]);
        }
        else {
            result = await improvedFighter.doubleHit(fighter, point[counter]);
        }
        if (result === "time is over") {
            console.log("Game is over");
            return;
        }
        counter = counter === point.length - 1 ? 0 : counter++;
    }
}

