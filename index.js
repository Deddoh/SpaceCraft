const parse = require("csv-parse");
const fs = require("fs");

const results = [];
fs.createReadStream("kepler_data.csv")
.pipe(parse({
    comment:'#',
    columns: true,
}))
.on("data", (data)=>{results.push(data)})
.on("error", (err)=>{console.log("Exception: ", err)})
.on("end", ()=>{
    console.log("Results", results.length);
});