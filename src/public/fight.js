// create async function fight
export default async function fight(fighter, improvedFighter, ...point) {
    let counter = 0;
    console.log("1");
    while (1) {
        let result = await fighter.hit(improvedFighter, point[counter]);
        if (result === "time is over") {
            console.log("Game is over");
            return;
        }
        counter = counter === point.length - 1 ? 0 : counter++;
    }
}

