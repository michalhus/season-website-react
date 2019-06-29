import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const[userLat,setLat] = useState({
        latitude: null,
        errMsg: '' 
    });

    useEffect(() => {
        return window.navigator.geolocation.getCurrentPosition(
            (position) => setLat({ latitude: position.coords.latitude }),
            (err) => setLat({ errMsg: err.message }),
            {timeout:10000}
        );
    });

    //Gets values from the state?
    const { latitude, errMsg } = userLat;

    return errMsg && !latitude ? <div> Error: {errMsg} </div> 
            : !errMsg && latitude ? <div> Your Latitude is: {latitude} </div> 
            : <div> Loading... </div>  
}

ReactDOM.render(<App/>, document.querySelector('#root'));