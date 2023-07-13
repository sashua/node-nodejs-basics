import { createWriteStream } from "fs";

const FILENAME = "files/fileToWrite.txt";

const write = async () => {
  const writeStream = createWriteStream(
    new URL(FILENAME, import.meta.url).pathname
  );
  process.stdin.pipe(writeStream);
};

await write();
