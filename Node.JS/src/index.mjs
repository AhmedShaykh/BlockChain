import PromptSync from "prompt-sync";
import { addTwo } from "./app.mjs";

const prompt = PromptSync();

let data = prompt("Enter Your Name: ");
console.log(data);

let num = Number(prompt("Enter Your Number: "));
console.log(addTwo(num));