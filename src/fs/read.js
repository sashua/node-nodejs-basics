import fs from "fs/promises";

const FILENAME = "files/fileToRead.txt";

const read = async () => {
  try {
    const text = await fs.readFile(
      new URL(FILENAME, import.meta.url).pathname,
      {
        encoding: "utf-8",
      }
    );
    console.log(text);
  } catch (error) {
    throw error.code === "ENOENT" ? new Error("FS operation failed") : error;
  }
};

await read();
