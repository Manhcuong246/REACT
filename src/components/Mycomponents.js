import React from "react";
class Mycomponent extends React.Component {
    state = {
           name:"eric",
           address:"hoidanit",
           age: 26
     }; 
    render(){

        return(

            <div>
                my firts components <br></br>
                My name is {this.state.name}
            </div>
        );
    }
}
export default Mycomponent;