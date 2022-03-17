import './SignIn.css'

const SignIn = ({routeChange}) => {
    return (
        <div className='baseForm'>
            <div className='subForm'>
                <p className='signInTitle'>Sign In</p>
                <p className='labelS'>Email</p>
                <input className='inputForm' type='email'/>
                <p className='labelS'>Password</p>
                <input className='inputForm' type='password'/>
                <input onClick={()=>routeChange('home')} className='SignInSubmit' type='submit' value='Sign In'/>
                <p onClick={()=>routeChange('register')} className='registerLink'>Register</p>
            </div>
        </div>
    )
}

export default SignIn;