import React from 'react'
import Toyota from './Car/Toyota';
import Daihatsu from './Car/Daihatsu';
import Honda from './Car/Honda';



export default class TypeCar extends React.Component{ 
    
    render(){ 

        if(this.props.DivState ==='Toyota'){
            return(
                <div>
                    <Toyota
                        // onVehicle = {this.props.onVehicle.bind(this)}
                    />
                </div>                
            );
        } else if(this.props.DivState ==='Daihatsu'){ 
            return(
                <div>
                    <Daihatsu
                        // onVehicle = {this.props.onVehicle.bind(this)}
                    />
                    <br/>
                </div>                
            );
        }  
        else if(this.props.DivState ==='Honda'){ 
            return(
                <div>
                    <Honda
                        // onVehicle = {this.props.onVehicle.bind(this)}
                    />
                </div>                
            );
        }
        else if(this.props.DivState ==='Nissan'){ 
            return(
                <div>
                    {/* <VehicleMot
                        onVehicle = {this.props.onVehicle.bind(this)}
                    /> */}
                </div>                
            );
        }else { 
            return <div></div>
        } 

        
    }
}