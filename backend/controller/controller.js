const createError = require('http-errors');
const os = require('os');
const si = require('systeminformation');


exports.cpuInfo = async(req, res, next) => {
  try{
    const {governor, efficiencyCores, performanceCores, voltage, ...data} = await si.cpu()
    res.status(200).json(data);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.cpuUsage = async(req, res, next) => {
  try{
    const cpus = os.cpus();
    res.status(200).json(cpus);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.biosInfo = async(req, res, next) => {
  try{
    const bios = await si.bios()
    res.status(200).json(bios);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.osInfo = async(req, res, next) => {
  try{
    const os = await si.osInfo()
    res.status(200).json(os);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.system = async(req, res, next) => {
  try{
    const system = await si.system()
    res.status(200).json(system);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.baseboard = async(req, res, next) => {
  try{
    const baseboard = await si.baseboard()
    res.status(200).json(baseboard);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.cpuCurrentSpeed = async(req, res, next) => {
  try{
    const cpuCurrentSpeed = await si.cpuCurrentSpeed()
    res.status(200).json(cpuCurrentSpeed);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.cpuTemperature = async(req, res, next) => {
  try{
    const cpuTemperature = await si.cpuTemperature()
    res.status(200).json(cpuTemperature);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.memoryInfo = async(req, res, next) => {
  try{
    const {total, free, used, active, available} = await si.mem()
    const data = {
      total: total/(1024**3),
      free: free/(1024**3),
      used: used/(1024**3),
      active: active/(1024**3),
      available: available/(1024**3)
    }
    res.status(200).json(data);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.memLayout = async(req, res, next) => {
  try{
    const memLayout = await si.memLayout()
    res.status(200).json(memLayout);
  }catch(error){
    next(createError.NotFound())
  }
}

exports.graphics = async(req, res, next) => {
  try{
    const graphics = await si.graphics()
    res.status(200).json(graphics);
  }catch(error){
    next(createError.NotFound())
  }
}