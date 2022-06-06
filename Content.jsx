import React, { Component } from 'react';



const style1={
    fontFamily:"Work Sans",
    fontWeight:"400",
    fontStyle:"normal",
    fontSize:"14px",
    marginLeft:"156px",
    marginTop:"40px",
    color:"#000000"
}

const style2={
    boxSizing:"border-box",
    border:"1px solid #E9EEF2",
    backgroundColor:"#ffffff",
    borderRadius:"4px",
    marginLeft:"156px",
    padding:"14px 44px 13px",
    width:"272px",
    height:"56px"

}

const style3={
    marginLeft:"505px",
    marginTop:"2px",
    backgroundColor:"#1B31AB",
    color:"white",
    borderRadius:"32px",
    width:"141px",
    height:"62px"

}

const style4={
    marginLeft:"156px",
    marginTop:"49px",
    width:"490px",
    height:"155px",
    backgroundColor:"white",
    borderRadius:"8px",
    padding:"30px"

}
const style6={
    margin:"24px"
}





class Content extends Component {
    state={
        latOrigin:28.6143,
        lonOrigin:77.1994,
        latDestination:26.9154576,
        lonDestination:75.8189817
    };
    
    
    handleSubmit=(e)=>{
        e.preventDefault();
        var originValue=e.target.origin.value;
        var destinationValue=e.target.destination.value;
        console.log(originValue+" //  "+destinationValue);

      

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${originValue}&limit=5&appid=23b73e8b8bc846486051b0d416cb20c1`)
        .then((response)=>response.json())
        .then((response)=>{
            this.setState({latOrigin:response[0].lat});
            this.setState({lonOrigin:response[0].lon});
            
            
            
            
        });
        

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${destinationValue}&limit=5&appid=23b73e8b8bc846486051b0d416cb20c1`)
        .then((response)=>response.json())
        .then((response)=>{
            this.setState({latDestination:response[0].lat});
            this.setState({lonDestination:response[0].lon});
            
            
        });
        
        var rad=function(x){
            return x*Math.PI/180;
        }
        var p1={
            lat:this.state.latOrigin,
            lng:this.state.lonOrigin
        }
       
        var p2={
            lat:this.state.latDestination,
            lng:this.state.lonDestination
        }
        
        var getDistance=function(p1,p2){
            var R=6371;
            var dLat=rad(p2.lat-p1.lat);
            var dLong=rad(p2.lng-p1.lng);
            var a=Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(rad(p1.lat))*Math.cos(rad(p2.lat))*Math.sin(dLong/2)*Math.sin(dLong/2);
            var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
            var d=R*c;
            return d;
        }
        console.log(getDistance(p1,p2));
         
         

        
        

    }
     

    render() { 
        return (
            <React.Fragment>
                <div>
                        
                        <form onSubmit={this.handleSubmit} >
                            <p style={style1}>Origin</p>
                            <input style={style2} type="text"  placeholder="Mumbai" name="origin"/>
                            <br />
                            <br />
                            <button style={style3}>Calculate</button>
                            <p style={style1}>Destination</p>
                            <input style={style2} type="text" placeholder="Delhi" name="destination"  />

                        </form>
                        

                        <div style={style4}>
                            <div >
                                Distance &nbsp;&nbsp;&nbsp;1427kms
                            </div>
                            <div style={style6}> 
                                <p>The distance between Mumbai and Delhi is 1427kms.</p>

                            </div>
                            
                        </div>
                    </div>
            
            </React.Fragment>
        );
    }
}
 
export default Content;

