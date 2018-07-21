// create two instances

// call fight function

import Fighter from "./fighter";
import {ImprovedFighter} from "./improvedFighter";
import fight from "./fight";

let fighter1 = new Fighter("fighter1", 5, 50);
let fighter2 = new ImprovedFighter("fighter2", 5, 50);

fight(fighter1, fighter2,1,2,3,4,5,6,7,8,9);
