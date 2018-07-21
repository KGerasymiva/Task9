// create two instances

// call fight function

import Fighter from "./fighter";
import {ImprovedFighter} from "./improvedFighter";
import fight from "./fight";

let fighter1 = new Fighter("fighter1", 100, 5);
let fighter2 = new ImprovedFighter("fighter1", 100, 5);

fight(fighter1, fighter2, 2, 3, 4, 5, 6, 7, 8);
