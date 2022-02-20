const si = require('systeminformation');
const os = require('os');

const printSystemInfo = async () => {
  const cpuTemperature = await si.cpuTemperature();
  const battery = await si.battery();
  const graphics = await si.graphics();

  const systemInfo = {
    platform: os.platform(),
    architecture: os.arch(),
    username: os.userInfo().username,
    cpusModels: os.cpus().map(cpu => cpu.model),
    cpuTemperature: cpuTemperature.main,
    graphics: graphics.controllers,
    freemem: os.freemem(),
    totalmem: os.totalmem(),
    battery: battery.percent,
  }

  console.log(systemInfo);
}

const frequency = process.argv[2];

setInterval(printSystemInfo, +frequency * 1000);