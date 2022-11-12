import { addTwo } from "./app.mjs";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

let data = prompt("Enter Your Name: ");
console.log(data);

let num = Number(prompt("Enter Your Number: "));
console.log(addTwo(num));