import React,{Component} from 'react'
import {Select} from 'antd'
import classes from './SelectSelf.less'
console.log('classes',classes)
export default class SelectSelf extends Component{
    constructor(props){
        super(props)
        this.state={
            flag:false,
            count:0
        }
    }
    handleChange(value){
        let {limitKey}=this.props
        this.setState({
            count:value.length
        })
        if(value.length>=limitKey){
            this.setState({
                flag:true
            })
        }
    }
    render(){
        const {children,style}=this.props
        const {flag,count}=this.state
        console.log('flag',flag)
        return(
            <div className={flag?classes['hidden']:null} style={{position:'relative'}} >
                {flag?(
                        <span style={{position:'absolute',right:30,zIndex:1,color:'red'}}>共选中{count}个</span>
                    ):(
                        null
                    )}
                <Select
                    multiple
                    style={style}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={(value)=>this.handleChange(value)}
                >
                    {children}
                </Select>
            </div>
        )
    }
}