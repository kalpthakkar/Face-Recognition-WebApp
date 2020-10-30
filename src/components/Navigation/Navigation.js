import React from 'react';

import Logo from '../Logo/Logo';


const Navigation = ({ onRouteChange, logoutEvent, isSignedIn }) => {
	
	if(isSignedIn)																		// Signout in navigation
	{
		return (
			<div style={{padding: '30px'}}>
				<nav style={{display: 'flex', justifyContent: 'space-between'}}>		{/*In react, we use camel case expression instead of justif-content*/}
					<div className="ma1 mt1">
						<Logo />
					</div>
					{ window.matchMedia("only screen and (max-width: 760px)").matches
			        	?	<div>
			        			<p style={{paddingRight: '3%'}} className="f3 link dim black pointer" onClick={() => logoutEvent(false)}>Signout</p>
			        		</div>
			        	: 	<div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '3rem'}}>
			        			<p style={{display: 'flex', position: 'absolute', justifyContent: 'flex-end'}} className="f3 link dim black pointer" onClick={() => logoutEvent(false)}>
			        				Sign out
			        			</p>
			        		</div>
			       	}
					
				</nav>
			</div>
		);
	}
	else
	{
		return(
			<div style={{ padding: '30px'}}>
				<nav style={{display: 'flex', justifyContent: 'space-between'}}>		{/*In react, we use camel case expression instead of justif-content*/}
					<div className="ma1 mt1">
						<Logo />
					</div>
					{ window.matchMedia("only screen and (max-width: 760px)").matches
			        	?	<div style={{display: 'flex', flexWrap: 'wrap', marginRight: '7%'}}>
			        			<div style={{marginRight: '3.5rem', marginLeft: '2rem'}}>
									<p style={{position: 'absolute'}} className="f3 link dim black pointer" onClick={() => onRouteChange('signin')}>SignIn</p>
								</div>
								<div style={{marginRight: '3.5rem', marginLeft: '2rem'}}>
								<p style={{position: 'absolute'}} className="f3 link dim black pointer" onClick={() => onRouteChange('register')}>Register</p>
								</div>
							</div>
			        	: 	<div style={{display: 'flex', justifContent: 'flex-end', marginRight: '6%'}}>
			        			<div style={{marginRight: '7.2rem'}}>
									<p style={{position: 'absolute'}} className="f3 link dim black pointer" onClick={() => onRouteChange('signin')}>SignIn</p>
								</div>
								<div style={{marginRight: '3rem'}}>
								<p style={{position: 'absolute'}} className="f3 link dim black pointer" onClick={() => onRouteChange('register')}>Register</p>
								</div>
							</div>
			       	}
				</nav>
			</div>
		);
	}
}

export default Navigation;