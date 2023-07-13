import { createReadStream } from "fs";

const FILENAME = "files/fileToRead.txt";

const read = async () => {
  const readStream = createReadStream(
    new URL(FILENAME, import.meta.url).pathname
  );
  readStream.pipe(process.stdout);
};

await read();
