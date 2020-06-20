var axios = require('axios');
const  config = { headers: { 'Content-Type': 'multipart/form-data' } };

export function getHomeData(data)
{
    const url = window.url+'/home';
    return axios.get(url,data,config);
}

export function getContests(data){
    const url = window.url+'/contest';
    return axios.get(url,data,config);
}

export function getWalletInfo(data){
    const url = window.url+'/wallet';
    return axios.get(url,data,config);
}

