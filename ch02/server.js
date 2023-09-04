const express = require('express');
  
const app = express();
console.log("*** before calling static: public");
app.use(express.static('public'));
console.log("*** before listen ***");
app.listen(3000, function () {
  console.log('App started on port 3000');
});