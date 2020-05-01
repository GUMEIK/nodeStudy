const fs = require("fs");
const path = require("path");
// 异步函数
fs.readFile(path.resolve(__dirname,"../../files/test.txt"),{
    encoding:"utf-8"
},(err,result)=>{
    console.log(result)
})
// 同步函数
const content = fs.readFileSync(path.resolve(__dirname,"../../files/test.txt"),{encoding:"utf-8"});
console.log(content)
// promises
async function read(){
    const content = await fs.promises.readFile(path.resolve(__dirname,"../../files/test.txt"),{encoding:"utf-8"});
    console.log(content)
}
read()