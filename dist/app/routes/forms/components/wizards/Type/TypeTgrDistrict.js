import React from 'react'
import TangDistrict from './TangDistrict';
import TangselDistrict from './TangselDistrict';


export default class TypeTgrDistrict extends React.Component{ 
    
    render(){ 
        if(this.props.DivState ==='Tangerang'){
            return(
                <div>
                <TangDistrict
                onChangeAddress= {this.props.onChangeAddress.bind(this)}
                />   
                </div>                
            );
        } else if(this.props.DivState ==='Tangerang Selatan'){ 
            return(
                <div>
                    <TangselDistrict
                    onChangeAddress= {this.props.onChangeAddress.bind(this)}
                    />
                </div>                
            );
        }
         else { 
            return <div></div>
        } 

        
    }
}