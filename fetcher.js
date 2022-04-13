const input = process.argv.slice(2);
const request = require('request');
const fs = require('fs');


request(input[0], (error, response, body) => {
  fs.writeFile(input[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`);
  });
  // console.log('body:', body); // Print the HTML for a website
});