const request = require('request');
const fs = require('fs');

const manualInput = process.argv.slice(2);
const domainCheck = manualInput[0];
const pathCheck = manualInput[1];

request(domainCheck, (error, response, body) => {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  fs.writeFile(pathCheck, body, (err) => {
    if (err) throw err;
    let stats = fs.statSync(pathCheck);
    let fileSize = stats['size'];
    console.log(`Downloaded and saved ${fileSize} bytes to ${pathCheck}`);
  });
});