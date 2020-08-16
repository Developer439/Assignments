import React, { Component } from 'react';

export default class LineInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            blur: false,
        }
    }

    getBorderBottomColor = () => {
        if (this.state.focus) {
            // return window.color['searchBoxBgColor'];
            return '2px solid #029B78'
        }
        if(this.props.validation==='notrequired')
           return '1px solid #B1B1B1';
        if (this.state.blur) {
            
            if (this.props.validation === 'createdBy' && (this.props.value === '' ) ) {
                return '2px solid  #F15A22';
            }

            if (this.props.validation === 'name' && (this.props.value === '' ) ) {
                return '2px solid  #F15A22';
            }

            if (this.props.validation === 'payee_name' && (this.props.value === '') ) {
                return '2px solid  #F15A22';
            }

            if (this.props.validation === 'age' && (this.props.value === '' ) ) {
                return '2px solid  #F15A22';
            }

            if (this.props.validation === 'ID_number' && (this.props.value === '' ) ) {
                return '2px solid  #F15A22';
            }

            if (this.props.validation === 'usual_residence' && (this.props.value === '' ) ) {
                return '2px solid  #F15A22';
            }

            if (this.props.validation === 'email' && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.props.value))) {
                return '2px solid  #F15A22';
            }
            if(this.props.validation === 'nm_email')
            {
                if(this.props.value !== '' && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.props.value)))
                {
                    return '2px solid  #F15A22';
                }
                if(this.props.value === ''){
                    return '2px solid  #F15A22'; 
                }
                if((/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.props.value))){
                    return '1px solid #B1B1B1';
                }
                
            }
            if(this.props.validation === 'non_mandatory')
            {
                return '1px solid #B1B1B1';
            }
            // if (this.props.validation === 'mobile' && (this.props.value + '').length !== 9) {
            if (this.props.validation === 'mobile' && (this.props.value < 500000000 || (this.props.value + '').length < 9)) {
                return '2px solid #F15A22';
            }
            if (!this.props.value || this.props.value === '') {
                return '1px solid #B1B1B1';
            }
        }
        if( (this.props.min && (this.props.value + '').length<this.props.min ) || this.props.value === ''){
            return '1px solid #B1B1B1';
        }
        return '1px solid #B1B1B1';
    }

    getLabelColor = () => {
        if (this.state.focus) {
            // return window.color['searchBoxBgColor'];
            return '#029B78'
        }
    
        if(this.props.validation==='notrequired')
           return ' #444';
        if (this.state.blur) {
            
            if (this.props.validation === 'createdBy' && (this.props.value === '' ) ) {
                return '#666';
            }
            
            if (this.props.validation === 'name' && (this.props.value === '' ) ) {
                return '#666';
            }
            if (this.props.validation === 'payee_name' && (this.props.value === '' ) ) {
                return '#666';
            }

            if (this.props.validation === 'age' && (this.props.value === '') ) {
                return '#666';
            }

            if (this.props.validation === 'ID_number' && (this.props.value === '') ) {
                return '#666';
            }
            
            if (this.props.validation === 'usual_residence' && (this.props.value === '') ) {
                return '#666';
            }

            if (this.props.validation === 'email' && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.props.value))) {
                return '#F15A22';
            }
            if(this.props.validation === 'nm_email')
            {
                if(this.props.value != '' && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.props.value)))
                {
                    return '#F15A22';
                }
                else
                {
                    return '#444';
                }
            }
            if(this.props.validation === 'non_mandatory')
            {
                return '#444';
            }
            // if (this.props.validation === 'mobile' && (this.props.value + '').length !== 9) {
            if (this.props.validation === 'mobile' && (this.props.value < 500000000 || (this.props.value + '').length < 9)) {
                return '#666';
            }
            if (!this.props.value || this.props.value === '') {
                return '#444';
            }
        }
        if(this.props.value === ''){
            return '#444';
        }
        if(this.props.value !== ''){
            return '#666';
        }
        if( (this.props.min && (this.props.value + '').length<this.props.min ) || this.props.value === ''){
            return '#000';
        }
        return '#444';
    }

    getbackground = () => {
        if (this.state.focus) {
            // return window.color['searchBoxBgColor'];
            return ''
        }
        if(this.props.validation==='notrequired')
           return ' ';
        if (this.state.blur) {

            if (this.props.validation === 'createdBy' && (this.props.value === '' ) ) {
                return '#FFF1E2';
            }

            if (this.props.validation === 'name' && (this.props.value === '' ) ) {
                return '#FFF1E2';
            }

            if (this.props.validation === 'payee_name' && (this.props.value === '' ) ) {
                return '#FFF1E2';
            }
            
            if (this.props.validation === 'age' && (this.props.value === '' ) ) {
                return '#FFF1E2';
            }

            if (this.props.validation === 'ID_number' && (this.props.value === '' ) ) {
                return '#FFF1E2';
            }

            if (this.props.validation === 'usual_residence' && (this.props.value === '' ) ) {
                return '#FFF1E2';
            }

            if (this.props.validation === 'email' && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.props.value))) {
                return '#FFF1E2';
            }
            if(this.props.validation === 'nm_email')
            {
                if(this.props.value !== '' && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.props.value)))
                {
                    return '#FFF1E2';
                }
                if(this.props.value === ''){
                    return '#FFF1E2'; 
                }
            }
            if(this.props.validation === 'non_mandatory')
            {
                return '';
            }
            // if (this.props.validation === 'mobile' && (this.props.value + '').length !== 9) {
            if (this.props.validation === 'mobile' && (this.props.value < 500000000 || (this.props.value + '').length < 9)) {
                return '#FFF1E2';
            }
            if (!this.props.value || this.props.value === '') {
                return '';
            }
        }
        if( (this.props.min && (this.props.value + '').length<this.props.min ) || this.props.value === ''){
            return '';
        }
        return '';
    }

    render() {
        return (
            <div style = {{ ...this.props.style, position: 'relative',padding: '10px 0' }}>
                <input
                    type = { this.props.type }
                    value = { this.props.value }
                    onFocus = { () => this.setState({ focus: true, blur: false }) }
                    onBlur = { () => this.setState({ focus: false, blur: true }) }
                    onChange = { this.props.handleChange }
                    tabIndex = { this.props.tab }
                    name = { this.props.name }
                    maxLength = { this.props.max }
                    minLength = { this.props.min }
                    autoFocus = { this.props.autoFocus === true }
                    disabled = {this.props.disabled ? true : false}
                    autoComplete = "new-password"
                    style = {{
                        background: 'transparent',
                        // border: 0,
                        outline: 0,
                        width: '100%',
                        padding: this.props.isImg ? '20px 0 5px 40px' : '0 10px',
                        color: (this.props.value + '').length > 0 ?'#000':'#444',
                        fontWeight:(this.props.value + '').length > 0 ? 500:400,
                        height:'50px',
                        boxSizing:'border-box',
                        border: this.state.focus? this.getBorderBottomColor():this.getBorderBottomColor(), 
                        borderRadius:'4px',
                        // border:this.state.focus? '2px solid #029B78':'1px solid #B1B1B1',
                        // borderColor: this.getBorderColor(),
                        transition: '0.3s ease',
                        background:this.props.disabled?'#f5f5f5':this.getbackground()
                    }}
                />
                <label style = {{
                    position: 'absolute',
                    // left: this.props.isImg ? '40px' : '8px',
                    left: this.state.focus||(this.props.value + '').length > 0  ? '8px':'15px',
                    fontSize: this.state.focus || (this.props.value + '').length > 0 ? '13px' : '15px',
                    bottom: this.state.focus || (this.props.value + '').length > 0 ? '52px' : '27px',
                    transition: '0.3s ease',
                    pointerEvents: 'none',
                    letterSpacing:'.03rem',
                    fontWeight:this.state.focus ? 600 : (this.props.value + '').length > 0 ? 500:400,
                    background:this.state.focus ||(this.props.value + '').length > 0 ? '#fff' : '',
                    padding:this.state.focus ||(this.props.value + '').length > 0 ?'0 2px':'0',
                    color:  this.getLabelColor() 
                

                }}>
                    { this.props.placeholder }
                </label>
            </div>
        )
    }
}

