import React, { Component } from 'react';

const styles={
    fontFamily:"Work Sans",
    fontStyle:"normal",
    fontSize:"20px",
    lineHeight:"120%",
    color:"#1B31A8",
    textAlign:"center",
    fontWeight:"400"



}

class Title extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <p style={styles}>Let's calculate <strong>distance</strong> from Google maps</p>

            </React.Fragment>
        );
    }
}
 
export default Title;
