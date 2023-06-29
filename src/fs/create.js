import fs from "fs/promises";

const FILENAME = "files/fresh.txt";
const TEXT = "I am fresh and young";

const create = async () => {
  try {
    const filename = new URL(FILENAME, import.meta.url).pathname;
    await fs.writeFile(filename, TEXT, { encoding: "utf8", flag: "wx" });
  } catch (error) {
    throw error.code === "EEXIST" ? new Error("FS operation failed") : error;
  }
};

await create();
