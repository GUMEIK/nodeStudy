/**
 * 文件夹(目录)相关操作
*/
let fs = require('fs');
let path = require('path');
// 在src的上一层目录创建
let pathName = path.resolve(__dirname,'../..');



// 异步创建文件夹
/**
 * @param 文件夹路径
 * @param  附加的操作,如{ recursive: true }表示无论文件夹是否存在都重新创建,没有此项参数时
 * ，当目标文件夹已经创建的情况下会报错
 * @param 回调函数,接受一个错误对象
 */
fs.mkdir(`${pathName}/Test`,{recursive: true},(err)=>{
    if(!err) console.log("文件创建成功");
    else console.log(err);
})



/**
 * 同步创建文件夹，没有回调函数
 */
try{
    fs.mkdirSync(`${pathName}/TestSync`,{recursive: true})
}catch(e){
    console.log(e)
}


/**
 * 异步读取文件夹
 * @param1 文件夹路径
 * @param2 callback(err,files)
 * files为读取到文件夹下的所有文件列表数组
 * 如果没有读取到文件夹，会报错
 */
fs.readdir('Test',(err,files)=>{
    if(!err) console.log(files);
    else console.log(err);
})

/**
 * 同步读取文件
function readdirSync(path: PathLike, options?: {
    encoding: BufferEncoding;
    withFileTypes?: false;
}
 */
