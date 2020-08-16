import React from 'react';
import { getFormat, getDateStringFromDate, getRevDate, getOtherDate } from './helper';
import { connect } from 'react-redux';
import FixedBar from './fixedbar';

const Header = ({ searchParams, updateModal }) => {
    const { journeyDate = new Date() } = searchParams;
    const showDate = getFormat(journeyDate, 'd, t m');
    return (
        <FixedBar className="header">
            <div className="title">SALTSIDE CAMPAIGN MONITOR SYSTEM</div>
        </FixedBar>
    )
}

const mapStateToProps = ({ common }) => ({
    searchParams: common.searchParams
})

const mapDispatchToProps = {
    // updateModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);