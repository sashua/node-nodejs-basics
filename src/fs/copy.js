import fs from "fs/promises";

const SRC_DIR = "files";
const DEST_DIR = "files_copy";

const copy = async () => {
  try {
    await fs.cp(
      new URL(SRC_DIR, import.meta.url).pathname,
      new URL(DEST_DIR, import.meta.url).pathname,
      { force: false, errorOnExist: true, recursive: true }
    );
  } catch (error) {
    throw error.code === "ENOENT" || error.code === "ERR_FS_CP_EEXIST"
      ? new Error("FS operation failed")
      : error;
  }
};

await copy();
