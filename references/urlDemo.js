const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
//http://mywebsite.com:8000/hello.html?id=100&status=active

//Host (root domain)
console.log(myUrl.host);
//mywebsite.com:8000

// Hostname (not including port)
console.log(myUrl.hostname);
//mywebsite.com


// Pathname
console.log(myUrl.pathname);
// /hello.html


//Serialized query
console.log(myUrl.search);
//?id=100&status=active

//Params obj
console.log(myUrl.searchParams);
/*
    URLSearchParams { 'id' => '100', 'status' => 'active' }
 */

//Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
/*
    URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }
 */

//Loop throu params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
/*
    id: 100
    status: active
    abc: 123
 */