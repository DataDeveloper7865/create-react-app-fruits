import { choice, remove } from "./helpers";
import myChoices from "./foods"

let randomFruit = choice(myChoices);

console.log(`Id like one ${randomFruit}, please.`)
console.log(`Here you go: ${randomFruit}`)
console.log(`Delicious! May I have another?`)

remove(myChoices, randomFruit);

console.log(`I'm sorry, we're all out. We have ${myChoices} left`)