import React from 'react';
import { connect } from 'react-redux';
import Campaign from '../campaigns/campaign';

const Modal = ({ modal }) => {
   
    const getChild = () => {
        switch (modal) {
            case 'create' :
            case 'edit':
            case 'comment':
                return <Campaign />
            default:
                return null;
        }
    }

    return (
        <div className = {`modal ${ modal ? 'active' : '' }`}>
            { getChild() }
        </div>
    )
}

const mapStateToProps = ({ common }) => ({
    modal: common.modal
});

export default connect(mapStateToProps)(Modal);