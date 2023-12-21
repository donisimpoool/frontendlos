import React from 'react'
import Yamaha from './Motorcyle/Yamaha';
import HondaMot from './Motorcyle/HondaMot';
import SuzukiMot from './Motorcyle/SuzukiMot';
import Kawasaki from './Motorcyle/Kawasaki';




export default class TypeMotor extends React.Component{ 
    
    render(){ 

        if(this.props.DivState ==='Honda'){
            return(
                <div>
                    <HondaMot
                     
                    />
                </div>                
            );
        } else if(this.props.DivState ==='Yamaha'){ 
            return(
                <div>
                    <Yamaha
                    />
                    <br/>
                </div>                
            );
        }  
        else if(this.props.DivState ==='Suzuki'){ 
            return(
                <div>
                    <SuzukiMot
                     
                    />
                </div>                
            );
        }
        else if(this.props.DivState ==='Kawasaki'){ 
            return(
                <div>
                    <Kawasaki
                    />
                </div>                
            );
        }else { 
            return <div></div>
        } 

        
    }
}