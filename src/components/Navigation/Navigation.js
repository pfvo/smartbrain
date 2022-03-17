import './Navigation.css';
const Navigation = ({isSignedIn, children, routeChange}) => {
    if (isSignedIn === true){
        return (
            <nav>
                {children}
                <p onClick={()=>routeChange('signout')} style={{marginLeft: 'auto'}} className='SignOut'>Sign Out</p>
            </nav>
        )
        } else {
            return (
                <nav className="cjoin">
                    <p onClick={()=>routeChange('signin')} className='SignOut'>Sign In</p>
                    <p onClick={()=>routeChange('register')} className='SignOut'>Register</p>
                </nav>
            )
        }
}

export default Navigation;