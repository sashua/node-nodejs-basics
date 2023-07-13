import fs from "fs/promises";

const DIR_NAME = "files";

const list = async () => {
  try {
    const dir = await fs.readdir(new URL(DIR_NAME, import.meta.url).pathname);
    console.log(dir);
  } catch (error) {
    throw error.code === "ENOENT" ? new Error("FS operation failed") : error;
  }
};

await list();
