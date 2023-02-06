const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./docs/text.txt");
const writeStream = fs.createWriteStream("./docs/new-text.txt");
const compressStream = zlib.createGzip();

// readStream.on("data", (chunk) => {
//     writeStream.write('\n-----Chunk start-----\n');
//     writeStream.write(chunk);
//     writeStream.write('\n-----Chunk end-----\n');
// });

const handleError = () => {
  console.log("Error");
  readStream.destroy();
  writeStream.end("Finished with error...");
};

readStream
  .on("error", handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on("error", handleError);
