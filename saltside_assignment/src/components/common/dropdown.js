
import React, { Component } from 'react';
//import { fetchGet, isInteger } from '../../common/common';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            blur: false,
        }
    }
    
    getBorderColor = () => {
        if (this.state.focus) {
            // return window.color.searchBoxBgColor;
              return '2px solid #029B78'
        }

        if (this.state.blur) 
        {
            if (this.props.validation === 'nationality' && (this.props.defaultValue == ''))
            {
                return '2px solid red';
            }
            if (!this.props.defaultValue || this.props.defaultValue === '')
            {
                return '2px solid red';
            }
            return '1px solid #B1B1B1';
        }
    }
    render() {
        let that = this;
        // console.log(this.props);
        return (
            <div style = {{ ...that.props.style, position: 'relative' }}>
                <select
                    defaultValue=''
                    onFocus = { (e) => 
                        {
                            that.setState({ focus: true, blur: false }) 
                            that.props.handleChange(e)
                    }}
                    onBlur = { (e) => { 
                                    that.setState({ focus: false, blur: true }) 
                                    that.props.handleChange(e)
                                } }
                    onChange = { that.props.handleChange }
                    onClick = { that.props.handleChange }
                    tabIndex = { that.props.tab }
                    name = { that.props.name }
                    autoFocus = { that.props.tab === 1 }
                    value = {that.props.defaultValue }
                    disabled = { that.props.isDisabled ? 'disabled' : ''}
                    style = {{
                        background: 'transparent',
                        // border: 0,
                        outline: 0,
                        height:'50Px',
                        width: '100%',
                        padding: that.props.isImg ? '20px 0 5px 40px' : '0 10px',
                        color: '#000',
                        fontWeight: '500',
                        letterSpacing:'.03rem',
                        border:that.getBorderColor(),
                        borderRadius:'4px',
                        // borderBottom: '1px solid',
                        // borderColor: that.getBorderColor(),
                        transition: '0.3s ease'
                    }}>
                {
                    (this.props.defaultValue || '').length === 0 ? <option key={-1} value="">--Select--</option> : ''
                }
                {
                    
                    that.props.value.map((el,i) => (
                        typeof(el) !== "object" ?
                            <option
                                key = { i }
                                value = { el }
                                // selected= {el === this.props.defaultValue ? 'selected' : ''}
                            >
                            { el }
                            </option>
                        :
                            
                            <option
                                key = { i }
                                value = { el.aValue }
                                // selected= {el.aValue === this.props.defaultValue ? 'selected' : ''}
                            >
                            { el.aName }
                            </option>
                    ))
                }
                </select>
                <label style = {{
                    position: 'absolute',
                    // left: that.props.isImg ? '40px' : '0',
                    left:'8px',
                    fontSize: this.state.focus || (this.props.list + '').length > 0 ? '13px' : '14px',
                    bottom: this.state.focus || (this.props.list + '').length > 0 ? '42px' : '5px',
                    transition: '0.3s ease',
                    pointerEvents: 'none',
                    fontWeight:'500',
                    // color: that.state.focus || (that.props.value + '').length > 0 ? window.color.inputLabelColor : 'inherit'
                    padding:this.state.focus || (this.props.list + '').length > 0 ? '0 2px':'0',
                    background:this.state.focus || (this.props.list + '').length > 0 ? '#fff' : '',
                    // color: this.state.focus ? window.color.inputLabelColor : '#666',
                    color:'#000'  
                }}>
                    { that.props.placeholder }
                </label>
            </div>
        )
    }
}

export default DropDown;