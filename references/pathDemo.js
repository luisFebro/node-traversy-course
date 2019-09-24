const path = require('path');

//Base file name
console.log(path.basename(__filename));
//pathDemo.js

//Directory name
console.log(path.dirname(__filename));
//C:\_github-projects\node-project-traversy-course\references

//File extension
console.log(path.extname(__filename));
// .js

//Create path obj
console.log(path.parse(__filename));
/*{ root: 'C:\\',
  dir:
   'C:\\_github-projects\\node-project-traversy-course\\references',
  base: 'pathDemo.js',
  ext: '.js',
  name: 'pathDemo' }
*/
//console.log(path.parse(__filename).base)

//Concatenate paths
//produce:  ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
//C:\_github-projects\node-project-traversy-course\references\test\hello.html