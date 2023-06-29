const parseEnv = () => {
  const rssVars = Object.entries(process.env).reduce((acc, [key, val]) => {
    if (key.startsWith("RSS_")) {
      acc.push(`${key}=${val}`);
    }
    return acc;
  }, []);
  console.log(rssVars.join("; "));
};

parseEnv();
