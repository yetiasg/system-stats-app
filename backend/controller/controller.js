const createError = require('http-errors');
const si = require('systeminformation');


exports.cpuInfo = async(req, res, next) => {
  try{
    const {manufacturer, brand, speed, speedMin, speedMax,
    cores, physicalCores, processors, socket, vendor, family, model,
  stepping, revision, virtualization, flags, cache} = await si.cpu()
    res.status(200).json(cpu);
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