import React from 'react';
import { getFormat } from '../common/helper';
import {campaignActions} from '../common/constants'
import { connect } from 'react-redux';

const CampaignCard = ({ campaign, actionOnCampaign }) => (
    <div className='campaigncard'>
        <Row left={<Title name={campaign.name} />}
            right={<Title name={campaign.types} />} 
         />
        <Row left={<Title name={campaign.createdBy} 
            suffix={'created at ' + getFormat(campaign.doc, "H:i, t-v-y")} />} 
            right={<Title name={'last modified at ' + getFormat(campaign.lom, "H:i, t-v-y")} />} 
            />
        <Row>
            {campaignActions.map((el)=>{
                if(el.chckReuired&&1!=campaign.status)
                    return (<div key={`campaignActions_${el.name2}`} onClick={()=>actionOnCampaign(campaign.id,el.actionType2,campaign)} className="btn">{el.name2}</div>)
                else
                    return (<div key={`campaignActions_${el.name}`} onClick={()=>actionOnCampaign(campaign.id,el.actionType,campaign)} className="btn">{el.name}</div>)
            })}
        </Row>
    </div>
)


const Row = (props) => (
    <div className='campaigncard__row'>
        {props.left}
        {props.right}
        {props.children}
    </div>
)

const Title = ({ name = '', suffix = '' }) => (
    <div className='campaigncard__title'>
        <div>{name + ' ' + suffix}</div>
    </div>
)


const mapStateToProps = ({ campaigns }) => ({

})
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignCard);