import React from 'react'
import Denpasar from './Denpasar';
import Tabanan from './Tabanan';


export default class TypeBali extends React.Component{ 
    
    render(){ 
        if(this.props.DivState ==='Denpasar'){
            return(
                <div>
                <Denpasar
                onChangeAddress= {this.props.onChangeAddress.bind(this)}
                />   
                </div>                
            );
        } else if(this.props.DivState ==='Tabanan'){ 
            return(
                <div>
                    <Tabanan
                    onChangeAddress= {this.props.onChangeAddress.bind(this)}
                    />
                    
                </div>                
            );
        } else { 
            return <div></div>
        } 

        
    }
}