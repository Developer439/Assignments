import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import CampaignCard from './campaigncard';
import FixedBar from '../common/fixedbar';
import { updateModal } from '../../redux/common/action';
import { actionOnCampaign } from '../../redux/campaigns/action'

const Listing = ({ campaignsG, loader, updateModal, actionOnCampaign }) => {
    const {data, campaigns}  = campaignsG
    if(loader){
     return null;   
    }
    if (data.success === false) {
        return (
            <div className="no_res">
                No Data found!
            </div>
        )
    }

    if (data.success && campaigns && campaigns.length === 0) {
        return (
            <>
            <div className="no_res">
                No campaigns found!
            </div>
            <div className="createBtn" onClick={() => { updateModal('create') }} ><div>click to create</div></div>
            {
                <FixedBar top={false} className="right _wz"
                    children={
                        <div className="btn create"
                            onClick={() => { updateModal('create') }} ></div>
                    }
                />
            }
            </>
        )
    }

    if (data.success && campaigns && campaigns.length > 0) {
        const campaignsL = campaigns.filter((el=>el.status!=0))
        if(campaignsL.length > 0)
        return (
            <> <div className='head-extra'> <ExtraInfo /> </div>
                {campaignsL.map((campaign, index) => (
                        <Fragment key={campaign.id + '-' + index}>
                            <CampaignCard campaign={campaign} actionOnCampaign={actionOnCampaign}/>
                        </Fragment>
                ))}
                {<FixedBar top={false} className="right _wz" 
                           children={<div className="btn create" onClick={() => { updateModal('create') }} 
                            ></div> }
                 />}
            </>
        );else{
           return (<>
            <div className="no_res">
                No campaigns found!
            </div>
            <div className="createBtn" onClick={() => { updateModal('create') }} ><div>click to create</div></div>
            {
                <FixedBar top={false} className="right _wz"
                    children={
                        <div className="btn create"
                            onClick={() => { updateModal('create') }} ></div>
                    }
                />
            }
            </>)
        }
    }

    return null;
}


const ExtraInfo = () => { return (<> ALL CAMPAIGNS </>) }

const mapStateToProps = ({ campaigns ,common}) => ({
    campaignsG:campaigns,
    loader:common.loader
})
const mapDispatchToProps = {
    updateModal,
    actionOnCampaign
}
export default connect(mapStateToProps, mapDispatchToProps)(Listing);