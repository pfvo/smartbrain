import React from 'react';
import './SignIn.css'


class SignIn extends React.Component {
    constructor(props){
        super(props) 
            this.state = {
                signinEmail: '',
                signinPassword: ''
            }
        }

    onEmailChange = (event) => {
        this.setState({signinEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signinPassword: event.target.value})
    }

    onSigninButton = () => {
        fetch('http://localhost:3003/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signinEmail,
                password: this.state.signinPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user)
                this.props.routeChange("home") 
            }
        })
        .catch(err => console.log('algo de errado nao está certo no login', err))
    }

    render () {
        const { routeChange } = this.props;
        return (
            <div className='baseForm'>
                  <div className='subForm'>
                    <p className='signInTitle'>Sign In</p>
                    <p className='labelS'>Email</p>
                    <input onChange={this.onEmailChange} className='inputForm' type='email'/>
                    <p className='labelS'>Password</p>
                    <input onChange={this.onPasswordChange} className='inputForm' type='password'/>
                    <input onClick={this.onSigninButton} className='SignInSubmit' type='submit' value='Sign In'/>
                    <p onClick={()=>routeChange('register')} className='registerLink'>Register</p>
                </div>
            </div>
        )
    }
}


export default SignIn;