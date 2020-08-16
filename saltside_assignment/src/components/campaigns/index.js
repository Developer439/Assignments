import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from '../../redux/campaigns/action';

import '../../styles/campaigns/main.scss';
import Listing from './listing';
import Header from '../common/header';
import Modal from '../common/modal';

const Home = ({ init, match }) => {
    useEffect(() => {
        init(match.params);
    }, [])

    return (
        <div>
            <Header />
            <Modal/>
            <Listing />
        </div>
    )
}

const mapDispatchToProps = {
    init: init
}

const mapStateToProps = ({ common }) => ({
    modal: common.modal
});

export default connect(false, mapDispatchToProps)(withRouter(Home));