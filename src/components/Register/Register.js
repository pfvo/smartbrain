import React from "react";


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onRegisterName = (event) => {
        this.setState({name: event.target.value})
    }

    onRegisterEmail = (event) => {
        this.setState({email: event.target.value})
    }

    onRegisterPassword = (event) => {
        this.setState({password: event.target.value})
    }

    onRegisterSubmit = () => {
        fetch('http://localhost:3003/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })

        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.routeChange('home');
            }
        })

    }


    render() {
        const {routeChange} = this.props;
        return (
            <div className='baseForm'>
                <div className='subForm'>
                    <p style={{marginTop: '30px'}} className='signInTitle'>Register</p>
                    <p className='labelS'>Name</p>
                    <input onChange={this.onRegisterName} style={{marginBottom: '0px'}} className='inputForm' type='text'/>
                    <p className='labelS'>Email</p>
                    <input onChange={this.onRegisterEmail} style={{marginBottom: '0px'}} className='inputForm' type='email'/>
                    <p className='labelS'>Password</p>
                    <input onChange={this.onRegisterPassword} style={{marginBottom: '0px'}} className='inputForm' type='password'/>
                    <input onClick={this.onRegisterSubmit} className='SignInSubmit' type='submit' value='Register'/>
                </div>
            </div>
        )
    }
}

export default Register;