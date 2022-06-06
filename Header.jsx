import React, { Component } from 'react';

const styles={
    height:"80px",
    width:"100%",
    backgroundColor:"white"
}
const imgStyle={
    height:"69px",
    width:"160px",
    left:"67px",
    top:"6px",
    position:"absolute"
}

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className="header" style={styles}>
                <img style={imgStyle} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/szgu0blc2twdiqziipge" alt="Logo" />
                
                
            </div>
        );
    }
}
 
export default Header;