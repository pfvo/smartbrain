

const Register = ({routeChange}) => {
    return (
        <div className='baseForm'>
            <div className='subForm'>
                <p style={{marginTop: '30px'}} className='signInTitle'>Register</p>
                <p className='labelS'>Name</p>
                <input style={{marginBottom: '0px'}} className='inputForm' type='text'/>
                <p className='labelS'>Email</p>
                <input style={{marginBottom: '0px'}} className='inputForm' type='email'/>
                <p className='labelS'>Password</p>
                <input style={{marginBottom: '0px'}} className='inputForm' type='password'/>
                <input onClick={()=>routeChange('home')}className='SignInSubmit' type='submit' value='Register'/>
            </div>
        </div>
    )
}

export default Register;