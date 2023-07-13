import { spawn } from "child_process";

const SCRIPT_PATH = new URL("files/script.js", import.meta.url).pathname;

const spawnChildProcess = async (args) => {
  const child = spawn("node", [SCRIPT_PATH, ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, "arg2"]);
