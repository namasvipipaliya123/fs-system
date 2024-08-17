const { log } = require('console');
const fs=require('fs');
let opr = process.argv[2];
let filename = process.argv[3];
let data = process.argv[4];

const createFile = () => {

    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log(filename, "file written successfully");
        }
    });
 fs.readFile(filename,utf-8,(err,data)=>{
    if(err){
        console.log(err.message);
        
    }
    else{
        console.log(data);
        
    }
});
    
    fs.rename(filname, filename,(err)=>{
        if(err){
            console.log(err.message);
    
        }
        else{
            console.log("file renamed successfully");
    
        }
    });
    
    fs.appendFile(filname, data,(err)=>{
        if(err){
            console.log(err);
    
        }
        else{
            console.log("data added");
    
        }
    });

 fs.unlink(filename, (err) => {
        if (err) {
            console.log(err);
    
        }
        else {
            console.log("file deleted");
    
        }
    });
}


