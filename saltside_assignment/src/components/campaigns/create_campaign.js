import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import { campaignTypes } from '../common/constants';
import { updateCampaignInfo, createCampaignInfo } from '../../redux/campaigns/action'
import LineInp from '../common/lineinp'
import Check from '../common/checkbox'

const CreateCampaign = ({ campaigns, updateCampaignInfo, createCampaignInfo, modal }) => {
    let { create_campaign, campaign_info } = campaigns
    const isEdit = modal == 'edit';
    const isComment = modal ==  'comment';
    if(!isEdit&&!isComment) campaign_info = create_campaign
    const camTypes = campaign_info.types||[];
    const campaignStaticTypeArr = campaignTypes.filter((el) => el.status).map((el) => el.name);
    const handleChange = (data, param = false, key = '') =>{
        if(isEdit||isComment){
            updateCampaignInfo(data, param , key)
        }else{
            createCampaignInfo(data, param , key)
        }
    }
    return (
        <div className="campaign">
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <LineInp
                type='text'
                handleChange={(e) => { 
                    if(e.target.value.match(/^[a-zA-Z\s]+$/) || e.target.value === '')  
                        handleChange(e.target.value,false,'name')
              }}
                placeholder='Name'
                name={'name'}
                value={campaign_info.name || ''}
                style={{ width: '40%' }}
                tab={1}
                validation='name'
                disabled ={isComment}
            />
            <LineInp
                type='text'
                handleChange={(e) => { 
                    if(e.target.value.match(/^[a-zA-Z\s]+$/) || e.target.value === '')  
                        handleChange(e.target.value,false,'createdBy')
              }}
                placeholder='Creator Name'
                name={'createdBy'}
                value={campaign_info.createdBy || ''}
                style={{ width: '40%' }}
                tab={2}
                validation='createdBy'
                disabled ={isEdit||isComment}
            />
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'15px'}}>
            <div style={{display:'flex',flexDirection:'column'}}>Select Type Of Campaign
            {
                campaignStaticTypeArr.map((el,index)=>(
                    <div key={`${el}_${index}`} style={{margin:'5px'}}>
                    <Check
                        type='text'
                        handleChange={(e) => { 
                            if(e.target.value.match(/^[a-zA-Z\s]+$/) || e.target.value === '')  
                                handleChange(e.target.value,'types','createdBy','arr')
                        }}
                        value={el}
                        checked={camTypes.indexOf(el)>-1}
                        tab={index + 2}
                        style={{ padding: '7px 5px' }}
                        innerText={el}
                        disabled ={isComment}
                    />
                    </div>
                ))
            }
            </div>
            </div> 
            {isComment&&<LineInp
                type='text'
                handleChange={(e) => { handleChange(e.target.value,false,'comment') }}
                placeholder='Comment'
                name={'comment'}
                value={campaign_info.comment || ''}
                style={{ width: '100%',marginTop:'20px'}}
                tab={4}
                validation='createdBy'
            />}
        </div>
    )
}
const mapStateToProps = ({ campaigns, common }) => ({
    campaigns,
    modal:common.modal
})

const mapDispatchToProps = {
    updateCampaignInfo,
    createCampaignInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaign);