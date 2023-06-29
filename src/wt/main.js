import os from "os";
import { Worker } from "worker_threads";

const WORKER_URL = new URL("worker.js", import.meta.url);

const runWorker = (workerURL, workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerURL, { workerData });
    worker.on("message", (data) => resolve({ status: "resolved", data: data }));
    worker.on("error", () => resolve({ status: "error", data: null }));
  });
};

const performCalculations = async () => {
  const coresNumber = os.cpus().length;

  const results = await Promise.all(
    Array(coresNumber)
      .fill()
      .map((_, i) => runWorker(WORKER_URL, 10 + i))
  );

  console.log(results);
};

await performCalculations();
