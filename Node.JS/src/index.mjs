import PromptSync from "prompt-sync";
import { addTwo } from "./app.mjs";

const prompt = PromptSync();

let data = prompt("Enter Your Name: ");
console.log(data);

console.log(addTwo(4));