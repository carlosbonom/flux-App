import React, { Component } from 'react'
import './Caja.css'

import ColorAppStore from '../store/ColorappStore';

class Caja extends Component{
    constructor(props){
        super(props);
        this.state ={
            color: ColorAppStore.getActivColor(),
        }
    }

    componentDidMount(){
        ColorAppStore.on('storeUpdated', this.updateColor )
    }

    componentWillMount(){
        ColorAppStore.removeListener('storeUpdated', this.updateColor)
    }

    updateColor = () => {
        this.setState({
            color: ColorAppStore.getActivColor()
        })
    }

    render(){
        return(
            <div className="Caja">
                <div className="color-container" style={{backgroundColor: this.state.color}}></div>
            </div>
        )
    }
}
export default Caja