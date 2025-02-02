import React, {useState} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    constructor(props){
        super(props)
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            }, 
            (err) => console.log(err)
        );

    }
    
    // const[position,setPosition] = useState(null);
    render(){


        return <div>Latitude: {this.state.lat}</div>;
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));