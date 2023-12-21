import React from 'react'
import JogjaDis from './JogjaDis';
import Sleman from './Slemans';

export default class TypeYogyaDis extends React.Component{ 
    
    render(){ 
        if(this.props.DivState ==='YOGYAKARTA'){
            return(
                <div>
                <JogjaDis
                onChangeAddress= {this.props.onChangeAddress.bind(this)}
                />   
                </div>                
            );
        } else if(this.props.DivState ==='SLEMAN'){ 
            return(
                <div>
                    <Sleman
                    onChangeAddress= {this.props.onChangeAddress.bind(this)}
                    />
                    <br/>
                </div>                
            );
        } else { 
            return <div></div>
        } 

        
    }
}