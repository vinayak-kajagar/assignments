//1st solution
// function counter(){
//    let  count = 0;
//    setInterval(()=>{
//     count++
//    console.log(count)
//    },1000)
// }

// counter();

//2nd solution
// function counter2() {
//   let count2 = 0;

//   function incrementAndLog() {
//     count2++;
//     console.log(count2);
//     setTimeout(incrementAndLog, 1000);
//   }

//   setTimeout(incrementAndLog, 1000);
// }

// counter2();

//3rd sloution
 var fs = require("fs");
// function readFile() {
//   fs.readFile("data.txt", "utf-8", (err, data) => {
//     for (i = 0; i < 100; i++) {}
//     console.log(data);
//   });
//   console.log("exited");
// }

// readFile();


function writeFile(){
    fs.writeFile('data.txt',"writing the file",(err,data)=>{
        for (i = 0; i < 10000; i++) {}
        console.log("file has been written")
    })

    console.log('done')
}

writeFile()