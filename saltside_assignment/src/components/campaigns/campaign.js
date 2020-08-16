import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateModal } from '../../redux/common/action';
import { createCampaign, updateCampaign, addOrUpdateCampaign} from '../../redux/campaigns/action'

import CloseIcon from '../common/icons/close';
import FixedBar from '../common/fixedbar';
import CreateCampaign from './create_campaign';

const Campaign = ({ updateModal, campaigns, modal, createCampaign, updateCampaign, addOrUpdateCampaign }) => { 
    const resetModal = () =>{
        createCampaign();
        updateCampaign();
        updateModal(false)
    }

    const saveModal = () =>{
        if(addOrUpdateCampaign(modal))
            resetModal()
    }

    return (
        <div className='filter'>
            <FixedBar className='header'>
                <div>Create Campaign</div>
                <CloseIcon onClick={()=>resetModal()} />
            </FixedBar>
            <div className='filter__content'>
                <CreateCampaign/>
            </div>
            <FixedBar top={false} className='footer'>
                <div className='btn'
                    onClick={()=>saveModal()}
                >SAVE</div>
            </FixedBar>
        </div>
    )
}

const mapStateToProps = ({ campaigns, common}) => ({
    campaigns,
    modal:common.modal
})

const mapDispatchToProps = {
    updateModal, 
    createCampaign, 
    updateCampaign, 
    addOrUpdateCampaign
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);


