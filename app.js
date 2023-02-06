const fs = require("fs");

fs.readFile("./text.txt", "utf8", (error, data) => {
  fs.mkdirSync("./files", () => {});
  fs.writeFileSync("./files/text_2.txt", data, () => {});
});

setTimeout(() => {
    if (fs.existsSync('./files/text_2.txt')) {
        fs.unlink('./files/text_2.txt', ()=>{});
    }
}, 4000)

setTimeout(() => {
    if (fs.existsSync('./files')) {
        fs.rmdir('./files', () => {})
    }
}, 6000)