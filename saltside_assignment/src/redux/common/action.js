import * as types from '../types';

export const updateLoader = (data) => ({
    type: types.LOADER,
    data
})

export const updateError = (data) => ({
    type: types.ERROR,
    data
})

export const updateModal = (data) => ({
    type: types.MODAL,
    data
})


export const updateErrorHide = (data) => (dispatch => {
    dispatch(updateError(data));
    setTimeout(() => {
        dispatch(updateError(false));
    }, 3000);
})

export const getSearchParams = () => {
    const data = {};
    const param = decodeURIComponent(window.location.search).split('?').length > 1 ? decodeURIComponent(window.location.search).split('?')[1] : false;
    const pairs = param ? param.split('&') : [];
    for (let i = 0; i < pairs.length; i++) {
        pairs[i] = pairs[i].split('=');
        data[pairs[i][0]] = pairs[i][1];
    }
    return data;
}