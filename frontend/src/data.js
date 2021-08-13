const BASE_URL = 'http://localhost:3000';

const getJSON = async(url, options) => {
  try{
    const response = await fetch(url, options);
    if(!response.ok) throw new Error(response.message);
    return await response.json();
  }catch (error){
    console.log(error.message)
  }
};

export const getCPUInfo = async () => {
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  };
  const data = await getJSON(`${BASE_URL}/cpuUsage`, options);
  return data;
}