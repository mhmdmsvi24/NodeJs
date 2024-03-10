const os = require("os");

// Info about our current user
const user = os.userInfo();

// method to return system uptime in seconds
const upTime = os.uptime();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

// console.log(currentOS);
