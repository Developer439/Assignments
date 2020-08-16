import React from 'react';


const baseUrl = 'https://saltside.com/api';

export const urls = {
   
}

export const Rs = '₹';

export const campaignTypes = [
    {name:'sms',title:'sms',status:1,id:1},
    {name:'email',title:'email',status:1,id:2},
    {name:'push',title:'push',status:1,id:3},
    {name:'youtube',title:'youtube',status:1,id:4},
];

export const campaignActions = [
    {name:'Edit',actionType:'edit'},
    {name:'Delete',actionType:'delete'},
    {name:'Pause',chckReuired:true,name2:'Resume',actionType:'pause',actionType2:'resume',status:1},
    {name:'Comment',actionType:'comment'}
]

export const modal = {
    create:'Create Campaign',
    edit:'Edit Campaign',
    comment:'Add Comment'
}

