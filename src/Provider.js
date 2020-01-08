/*
 * @Author: your name
 * @Date: 2020-01-08 14:38:11
 * @LastEditTime : 2020-01-08 14:56:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux\src\Provider.js
 */
import React from 'react'
import PropTypes from 'prop-types'

class Provider extends React.Component {

    static childrenContextTypes = {
        store: PropTypes.object
    }
    constructor (props, context) {
        super(props, context)
        this.props = context.store
    }


    // getChildContext() {    
    //     return { store: this.store }  
    // }  


    render () {
        return this.props.children
    }
}