const fs=require('fs');
const path=require('path');
var data =path.resolve('F:\jsTube/get.json');
async function readfile(){
    try{
        const data=fs.readFileSync(data,'utf-8')
        data=JSON.parse(data);
        console.log(data);
    }
    catch(err){
        console.error('Error fetching data:', err.message);
    }
}
module.exports={
    readfile
}

readfile();
