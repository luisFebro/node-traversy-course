const os = require('os');

//Platform
console.log(os.platform());
//win32

//CPU arch
console.log(os.arch());
//ia32

//CPU core info
console.log(os.cpus());
/* gives an obj
    [ { model: 'Intel(R) Celeron(R) CPU          430
      @ 1.80GHz',
        speed: 1795,
        times:
         { user: 10025934,
           nice: 0,
           sys: 3019570,
           idle: 22276365,
           irq: 54896 } } ]
*/

//MEMORY
// Free memory
console.log(os.freemem());
//567013376

// Total Memory
console.log(os.totalmem());
//3210854400

//Home dir
console.log(os.homedir());
//C:\Users\ACESSO LIVRE


// Uptime (number of secs your system is been running up)
console.log(os.uptime());
//35720

// type of system
console.log(os.type());
//window_NT



