import * as types from '../types';
import store from '../index';
import { updateLoader } from '../common/action';
import {updateModal} from '../common/action';
import {getIosFormattedDate} from '../../components/common/helper';

export const updateResult = data => ({
  type: types.UPDATE_RESULT,
  data
})


export const updateCampaignList = data => ({
  type: types.UPDATE_CAMPAIGN_LIST,
  data
})

export const createCampaign = (data = 
  { id: -1, name: '', types: [], doc: '', comments: [], createdBy: '',  lom: '', status: 1, comment:'' }
  ) => ({
  type: types.ADD_CAMPAIGN,
  data
})

export const updateCampaign = (data = 
  { id: -1, name: '', types: [], doc: '', comments: [], createdBy: '',  lom: '', status: 1, comment:'' }
  ) => ({
  type: types.UPDATE_CAMPAIGN_INFO,
  data
})


export const actionOnCampaign = (id, actionType, campaign) => (dispatch => {
  // console.log(`${id},${actionType}`)
  const { campaigns } = store.getState().campaigns;
  let status = -1;
  if (id && actionType) {
    switch (actionType) {
      case "delete":
        status = 0;
        break;
      case "resume":
        status = 1;
        break;
      case "pause":
        status = 2;
        break;
      case "comment":
        status = 3;
        break;
      case "edit":
        status = 4;
        break;
    }
    if (status != -1) {
        campaigns.forEach(campaign => { if (campaign.id == id){
          if (status == 3 || status == 4) {
            //  alert(`${actionType} Section`);
             dispatch(updateCampaign(campaign))
             dispatch(updateModal(actionType));
          }
          else
          campaign.status = status; 
        } 
      });
      
    }
  }
  dispatch(updateLoader(true));
  dispatch(updateCampaignList([]))
  setTimeout(() => {
    dispatch(updateCampaignList(campaigns))
    dispatch(updateLoader(false));
  }, 500);

})

export const addOrUpdateCampaign = (actionType)=>dispatch=>{
  console.log(actionType)
  const { campaign_info,create_campaign,campaigns } = store.getState().campaigns;
  const ts = new Date().getTime();
  const lom =new Date(ts);
  switch(actionType){
    case "create":
          create_campaign.doc = lom;
          create_campaign.id = ts;
          create_campaign.lom = lom;
          if(create_campaign.name.trim().length<2){
            alert("Please enter valid name")
            return false;
          }else if(create_campaign.createdBy.trim().length<2){
            alert("Please enter creator name")
            return false;
          }else if(create_campaign.types.length<=0){
            alert("Please select atleast one type to proceed")
            return false;
          }
          campaigns.push(create_campaign);
          break;
    case "comment":
    case "edit":
      campaigns.forEach(cam=>{if(cam.id==campaign_info.id){
        if(actionType=="comment")
          cam.comments.push({ comment: campaign_info.comment, ts:lom });
        if(campaign_info.name.trim().length<2){
          alert("Please enter valid name")
          return false;
        }
        cam.name = campaign_info.name
        cam.types = campaign_info.types
        cam.lom = lom;
       }})
  }
  dispatch(updateLoader(true));
  dispatch(updateCampaignList([]))
  setTimeout(() => {
    dispatch(updateCampaignList(campaigns))
    dispatch(updateLoader(false));
  }, 500);
  console.log(campaigns)
  return true;
}

export const updateCampaignInfo = (data, param = false, key = '') => (dispatch => {
  const { campaign_info } = store.getState().campaigns;
  if (param) {
    const index = campaign_info[param].indexOf(data);
    if (index >= 0)
      campaign_info[param].splice(index, 1);
    else
      campaign_info[param].push(data)
  } else if (key)
    campaign_info[key] = data;
  dispatch(updateCampaign(campaign_info))
})

export const createCampaignInfo = (data, param = false, key = '') => (dispatch => {
  const { create_campaign } = store.getState().campaigns;
  if (param) {
    const index = create_campaign[param].indexOf(data);
    if (index >= 0)
      create_campaign[param].splice(index, 1);
    else
      create_campaign[param].push(data)
  } else if (key)
    create_campaign[key] = data;
  dispatch(createCampaign(create_campaign))
})


export const init = data => (dispatch => {
  dispatch(updateLoader(true));
  // dispatch(updateModal('create'))
  setTimeout(() => {
    // dispatch(updateResult({success:false}));
    dispatch(updateResult({
      success: true, campaigns: [
        { id: 1, name: 'Independece Day Offer', types: ['email', 'sms'], doc: '2020-08-14T16:08:20.549Z', comments: [{ comment: 'test comment', ts: '' }], createdBy: 'Guna',  lom: '2020-08-14T16:09:20.549Z', status: 1 },
        { id: 2, name: 'Vinayaka Chavithi Offer', types: ['email', 'sms', 'push'], doc: '2020-08-14T16:08:20.549Z', comments: [{ comment: 'test comment', ts: '' }], createdBy: 'Krish',  lom: '2020-08-14T16:09:20.549Z', status: 2 },
        { id: 3, name: 'Bank Offers', types: ['push'], doc: '2020-08-14T16:08:20.549Z', comments: [{ comment: 'test comment', ts: '', by: ''}], createdBy: 'Kartheek', lom: '2020-08-14T16:09:20.549Z', status: 1 },
      ]
    }));
    dispatch(updateLoader(false));
  }, 3000);
})

