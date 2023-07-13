import fs from "fs/promises";

const WRONG_FILE = "files/wrongFilename.txt";
const PROPER_FILE = "files/properFilename.md";

const exists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  const wrongFilename = new URL(WRONG_FILE, import.meta.url).pathname;
  const properFilename = new URL(PROPER_FILE, import.meta.url).pathname;

  const [wrongExists, properExists] = await Promise.all([
    exists(wrongFilename),
    exists(properFilename),
  ]);

  if (!wrongExists || properExists) {
    throw new Error("FS operation failed");
  }

  fs.rename(wrongFilename, properFilename);
};

await rename();
