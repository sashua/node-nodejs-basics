import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";

const FILE = "files/fileToCompress.txt";
const ARCH = "files/archive.gz";

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(new URL(ARCH, import.meta.url).pathname);
  const destination = createWriteStream(
    new URL(FILE, import.meta.url).pathname
  );

  await pipeline(source, gunzip, destination);
};

await decompress();
