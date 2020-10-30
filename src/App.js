import React, { Component } from 'react';
import './App.css';

/*For Background Particls (npm install react-particles-js)
  Instructions Link: https://www.npmjs.com/package/react-particles-js */
import Particles from 'react-particles-js'; 

// import Logo from './components/Logo/Logo'; (Inside Navigation component)
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import StatusInfo from './components/StatusInfo/StatusInfo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


/********************** For Patters Background **********************/
const ParticlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 690
      },
      shadow: {
        enable: true,
        color: "#0b0ed4",
        blur: 5
      }
    }
  }
}
/******************************************************************/

let initialState = {    // Will be used to change state of the application
  input: '',
  imageUrl: '',
  box: [],
  route: 'signin',
  isSignedIn: false,
  disableCSS: true,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;    // Initializing initialState inside the constructor (Whenever application loads)
  }

  loadUser = (data) => {          // data param. is set by signin/register form by passing an arg. of the valid response came from the server
    this.setState({user: {        // Updating state as per details of loggedIn user defined by the server
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }})
  }

  logoutEvent = (isSignedIn) => {                           // To reset inner properties 
    if(isSignedIn === false)
    {
      this.setState(initialState)
    }
  }

  onRouteChange = (route) => {                              // For handling currentRoute of the application (home(MainPage)/signin(Page)/register(Page)) 
    if (route === 'signout') {
      this.setState(initialState)
      
    } else if (route === 'home') {
        this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  onInputChange = (event) => {                              /* Triggered by: OnChange event */
    this.setState({input: event.target.value})              /* Updates input value */
  }

  keyEnter = (event) => {
    if (event.keyCode === 13 || event.which === 13 || event.key === "Enter") {   // Some browser use 'keyCode' and some uses 'which'
      this.onButtonSubmit()
    }
  }

  onButtonSubmit = () => {                                  /* Triggered by OnClick event / keyEnter function */
    this.setState({disableCSS: false})                      // For turning on the border property 
    this.setState({imageUrl: this.state.input})             // Updates default state
    this.setState({box: []})                                // Erase previous calculated area(s) from box which is an "array of objects"
    // fetch('http://localhost:3001/imageurl', {            // Incase for testing on localhost
    fetch('https://shrouded-castle-17930.herokuapp.com/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({                           // We stringify input(url) and is fetched by the server
              input: this.state.input
            })
          })
    .then(response => response.json())                        // receiving response back from server
    .then(response => {
        if (response.status.description === 'Ok' ||           // if response with status 200(OK) from API
            response.status.description === true ||           // currently not the case (just for backup purpose or modification by API service)
            response.status.description) {           
          this.calculateFaceLocation(response) 
          // fetch('http://localhost:3001/image', {                       // Incase for testing on localhost 
          fetch('https://shrouded-castle-17930.herokuapp.com/image', {    // for updating the entry count for user (only if response was Ok)
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {                                    // Updating entry count in front-end for user
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
        }   
    })
    .catch(err => this.setState({disableCSS: true}) );
  }

  calculateFaceLocation = (data) => {
    // console.log(data) // For debugging (Path: data.outputs[0].data.regions[arr_index].region_info.bounding_box)
    for(let i=0; i<data.outputs[0].data.regions.length; i++)
    {
      // console.log(data.outputs[0].data.regions[0].region_info.bounding_box) /* Used for fetching what actually comes from api (measurements in this case)*/
      let clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
      let image = document.getElementById('inputimage');
      let width = Number(image.width);
      let height = Number(image.height);
      // console.log(width, height); /* Used to define width'&'height after load*/

      /*Calculations: Conversion from API position_data and fixing with image wifth & height*/
      let myleft = clarifaiFace.left_col * width;
      let mytop = clarifaiFace.top_row * height;
      let myright = width - (clarifaiFace.right_col * width);
      let mybottom = height - (clarifaiFace.bottom_row * height);
      // Push objects inside array
      this.setState(prevState => ({   // https://stackoverflow.com/a/51786096/8666460
        box: [...prevState.box, {"leftCol": myleft, "topRow": mytop, "rightCol": myright, "bottomRow": mybottom}]
      }))      
      // console.log("box", this.state.box) // For debugging
    }
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"                                  // class="particles' has its properties defined in App.css
                   params={ParticlesOptions}
                   style={{ width: '100%'  /* , backgroundImage: `url(${logo})`  <==(optional)*/ }} /> 
        {/* Navigation includes (Logo + Signin/Register + Signout). It is a global component */}
        <Navigation onRouteChange = {this.onRouteChange}                  // To call onRouteChange function on signout/signin/register
                    logoutEvent = {this.logoutEvent}                      // To update isSignedIn state    
                    isSignedIn = {this.state.isSignedIn} />               {/* To display either of (Signout)/(Signin/Register)*/}
        { this.state.route === 'home' 
        ? <div>
            <Rank name={this.state.user.name}
                  entries={this.state.user.entries} />
            {  (this.state.imageUrl === '') 
            ? <StatusInfo imageUrl = {this.state.imageUrl} />
            : <div style={{padding: '1rem'}}></div>
            }
            <ImageLinkForm onInputChange = {this.onInputChange}
                           onButtonSubmit={this.onButtonSubmit}
                           keyEnter = {this.keyEnter} />
            <FaceRecognition box = {this.state.box}
                             imageUrl = {this.state.imageUrl} 
                             disableCSS = {this.state.disableCSS} />
          </div>
        : (
            this.state.route === 'signin'
            ? <Signin loadUser = {this.loadUser} onRouteChange = {this.onRouteChange} /> 
            : <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange} />
          )
        }
      </div>          
    );
  }
}

export default App;