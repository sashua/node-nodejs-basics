import fs from "fs/promises";

const FILENAME = "files/fileToRemove.txt";

const remove = async () => {
  try {
    await fs.rm(new URL(FILENAME, import.meta.url).pathname, { force: false });
  } catch (error) {
    throw error.code === "ENOENT" ? new Error("FS operation failed") : error;
  }
};

await remove();
