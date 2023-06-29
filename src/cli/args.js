const parseArgs = () => {
  const kvArgs = {};
  let lastKey = null;
  process.argv.slice(2).forEach((arg) => {
    if (arg.startsWith("--")) {
      lastKey = arg.slice(2);
      kvArgs[lastKey] = "";
    } else if (lastKey) {
      kvArgs[lastKey] = arg;
      lastKey = null;
    }
  });

  console.log(
    Object.entries(kvArgs)
      .map(([key, val]) => `${key} is ${val}`)
      .join(", ")
  );
};

parseArgs();
