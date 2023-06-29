import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, enc, cb) {
      let reversedChunk = chunk.toString().split("").reverse().join("");
      if (reversedChunk[0] === "\n") {
        reversedChunk = reversedChunk.slice(1) + "\n";
      }
      cb(null, reversedChunk);
    },
  });

  await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();
