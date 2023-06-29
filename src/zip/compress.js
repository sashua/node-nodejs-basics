import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";

const FILE = "files/fileToCompress.txt";
const ARCH = "files/archive.gz";

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(new URL(FILE, import.meta.url).pathname);
  const destination = createWriteStream(
    new URL(ARCH, import.meta.url).pathname
  );

  await pipeline(source, gzip, destination);
};

await compress();
