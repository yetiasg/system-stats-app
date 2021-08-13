'use strict'
import {getCPUInfo} from './data.js'

const dataList = document.getElementById('data-list');


getCPUInfo().then(data => {
  for(const {model, speed} of data){
    const list = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = `model: ${model}  |  speed: ${speed/1000} GHz`;
    list.append(span);
    dataList.append(list)
    console.log(data)
  }
});
