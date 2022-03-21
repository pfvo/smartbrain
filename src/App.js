import { Component } from 'react';
import Particles from 'react-tsparticles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';


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

const initialState = {
  input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: '',
      }
  }

class App extends Component {
  constructor() {
    super()
    this.state = initialState;
    
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
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
    fetch('http://localhost:3003/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(data => data.json())  
      .then(response => {
      if (response) {
        fetch('http://localhost:3003/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(data => data.json())
        .then(count => this.setState(Object.assign(this.state.user, {entries: count})))
        .catch(console.log)
      }
      this.displayFaceLocation(this.calculateFaceLocation(response))
    })
    .catch(err => console.log("errrooooo lan", err))
  }


loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
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
            <Rank userName={this.state.user.name} userEntries={this.state.user.entries}/>
            <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit}/>
            <FaceRecognition box={this.state.box} imageUrl={this.state.imgUrl}/>  
          </div>
          : (
            this.state.route === 'register'
            ? <Register loadUser={this.loadUser} routeChange={this.onRouteChange}/>
            : <SignIn loadUser={this.loadUser} routeChange={this.onRouteChange} /> 
          )
       }      
      </div>
    );
  }
}

export default App;
