import React from "react";


 class value extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listfilter: [],
        }

    }

    render() {
        return (
            <div>
                <input type={'text'} />
            </div>
        )
    }
}