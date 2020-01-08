/*
 * @Author: your name
 * @Date: 2020-01-08 14:50:46
 * @LastEditTime : 2020-01-08 15:31:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux\src\redux\react-redux.js
 */
import React from 'react'
import PropTypes from 'prop-types'

export class Provider extends React.Component {

    static childContextTypes = {
        store: PropTypes.object
    }
    constructor (props, context) {
        super(props, context)
        this.store = props.store
    }


    getChildContext() {    
        return { store: this.store }  
    }  


    render () {
        return this.props.children
    }
}


export function connect (mapStateToProps, mapDispatchToProps) {

    return function (Component) {
        class Connect extends React.Component {
            componentDidMount () {
                this.context.store.subscribe(this.handleStoreChange.bind(this))
            }

            handleStoreChange() {  
                // 触发更新          
                // 触发的方法有多种,这里为了简洁起见,直接forceUpdate强制更新,读者也可以通过setState来触发子组件更新          
                this.forceUpdate()        
            }


            render() {
                return (
                    <Component
                        {...this.props}
                        {...mapDispatchToProps(this.context.store.dispatch)}
                        {...mapStateToProps(this.context.store.getState())}
                    />
                )
            }
        }
        Connect.contextTypes = {        
            store: PropTypes.object      
        }
        return Connect
    }
}