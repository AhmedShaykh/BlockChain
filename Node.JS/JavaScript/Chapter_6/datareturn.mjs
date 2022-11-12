import { sayHello } from "./function.mjs";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

let namePorp = prompt("What's your name? ");

sayHello(namePorp);