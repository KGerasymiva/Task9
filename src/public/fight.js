// create async function fight
export default async function fight(fighter, improvedFighter, ...point) {
    let counter = 0;
    let result = "";
    let fighters = [fighter,improvedFighter];
    while (counter<point.length) {

        result =  await fighters[counter%2].hit(fighters[(counter+1)%2], point[counter]);

        if (result == "over") {
            console.log("Game is over");
            return;
        }
        counter++;
    }
}

