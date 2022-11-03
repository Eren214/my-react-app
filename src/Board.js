import React from "react";
import Square from "./Square";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            onOff:'ON',
            enabled: true,
            isEnabled: true, 
        }
    }
    createSquare(index){
        return <Square dataIndex={index}/>
    }
    toggleOnOff=()=>{
        this.setState({
            onOff:this.state.onOff == 'OFF' ? 'ON' : 'OFF',
            isEnabled:!this.state.isEnabled,
        });
    }
    setNewValue = (event,value) => {
        this.setState({
            enabled:value,
            //textState: value ? 'Hello Kodego' : 'Goodnight Kodego',
        })
        if(value){
            this.setState({textState: 'Hello Kodego'});
        }else{
            this.setState({textState: 'Goodbye Kodego'});
        }
    }
    render(){
        return(
            <div>
                <div>
                    {this.createSquare(1)}
                    {this.createSquare(2)}
                    {this.createSquare(3)}
                </div>
                <div>
                    {this.createSquare(4)}
                    {this.createSquare(5)}
                    {this.createSquare(6)}
                </div>
                <div>
                    {this.createSquare(7)}
                    {this.createSquare(8)}
                    {this.createSquare(9)}
                </div>
                <button onClick={this.toggleOnOff} className="btn btn-primary">Toggle{this.state.onOff}</button>
                <div>Is Enabled?{this.state.isEnabled.toString()}</div>
                <button onClick={(event) => this.setNewValue(event,!this.state.enabled)} className="btn btn-primary">Set New value</button>
                <div>{this.state.enabled.toString()}</div>
                <div>{this.state.textState}</div>
            </div>   
            );
        }
    }
 export default Board;