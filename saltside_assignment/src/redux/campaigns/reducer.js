import * as types from '../types';
import create_campaign from '../../components/campaigns/create_campaign';

const initialState = {
    data: {}, //  API result ---- as is from API
    campaigns:[],
    campaign_info:{ id: -1, name: '', types: [], doc: '', comments: [], createdBy: '',  lom: '', status: 1, comment:'' },
    create_campaign:{id: -1, name: '', types: [], doc: '', comments: [], createdBy: '',  lom: '', status: 1, comment:'' }
};

const data = function(state = initialState, action) {
    switch(action.type) {
        case types.UPDATE_RESULT:
            return {
                ...state,
                data:action.data,
                campaigns: action.data.campaigns ? [...action.data.campaigns] : []
            };

        case types.UPDATE_CAMPAIGN_LIST:
                return {
                    ...state,
                    campaigns: action.data ? [...action.data] : []
                };
        case types.ADD_CAMPAIGN:
            return {
                ...state,
                create_campaign:action.data ? {...action.data} : {}
            }
        case types.UPDATE_CAMPAIGN_INFO:
            return {
                ...state,
                campaign_info:action.data ? {...action.data} : {id:-1}
            }
        default:
            return state;
    }
}

export default data;