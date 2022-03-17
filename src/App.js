import { Component } from 'react';
import Particles from 'react-tsparticles';
import Clarifai, {FACE_DETECT_MODEL} from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';


const app = new Clarifai.App({
  apiKey:'88558e72ac7e4dd6a1a1e736ff83a095'
});

const particleOptions={
  fpsLimit: 60,
   particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 500,
      },
      value: 60,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route})
    
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.rawData.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('clarifaiImage');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
  }

displayFaceLocation = (box) => {
  this.setState({box: box})
}

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input})
    app.models.predict(FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceLocation(this.calculateFaceLocation(response)))
    .catch(err => console.log("errrooooo lan", err))
  }



  render () {
    return (
      <div className="App">
        {/* <Particles className='particles' options={particleOptions}/> */}
       
 
        <Navigation isSignedIn={this.state.isSignedIn} routeChange={this.onRouteChange}>
          <Logo />
        </Navigation> 
       {
         this.state.route === 'home'
         ? <div>
            <Rank />
            <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={this.state.box} imageUrl={this.state.imgUrl}/>  
          </div>
          : (
            this.state.route === 'register'
            ? <Register routeChange={this.onRouteChange}/>
            : <SignIn routeChange={this.onRouteChange} /> 
          )
       }      
      </div>
    );
  }
}

export default App;
