const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'curd');
const filePath = `${dirPath}/apple.txt`;
 fs.writeFileSync(filePath,'this is simple text file');

fs.readFile(filePath,'utf8',(err,file)=>{
      console.log(file)
 })
 fs.appendFile(filePath,' this is updated file', (err)=>{
     if(!err) console.log('files is updated')
 })
 fs.rename(filePath,`${dirPath}/fruit.txt`, (err)=> {
     if(!err) console.log('file is rename')
 })
fs.unlinkSync(`${dirPath}/fruit.txt`);