//1st problem
// const fs = require('fs');

// function removeBetweenSpaces(){
//     fs.readFile('file.txt','utf-8',(err,data)=>{
//      let text = data;
//      let clearedData = clearBetweenSpaces(text);
//      fs.writeFile('file.txt',clearedData,(err,savedData)=>{
//         console.log("data saved")
//      })
//     })
// }

// function clearBetweenSpaces(text){
//     let result = text.replace(/\s+/g, ' ');
//     console.log(result);
//     return result.trim();
// }

// removeBetweenSpaces();


//solution-2 |  HH:MM::SS (Eg. 13:45:23)
function desplayTime(){
    let HH , MM ,SS =0;
    setInterval(()=>{
      const currentDate = new Date();
      HH = currentDate.getHours();
      MM = currentDate.getMinutes();
      SS = currentDate.getSeconds();
      let mridian = HH<12?'AM':'PM'
      console.clear();
      console.log(`${HH}:${MM}:${SS} ${mridian}`);
    },1000)
    
}


desplayTime();