import { createHash } from "crypto";
import { createReadStream } from "fs";

const FILENAME = "./files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const hash = createHash("SHA256");
  const input = createReadStream(new URL(FILENAME, import.meta.url).pathname);
  input.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
