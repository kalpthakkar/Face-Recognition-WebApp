import React from 'react';
import './BootstrapAlertModalCSS.css';

const SigninAttemptStatus = ({ NumberOfSigninFailed }) => {
	if(NumberOfSigninFailed >= 10)
	{
		if(window.matchMedia("only screen and (max-width: 760px)").matches) /*For Mobile Users*/
		{	
			return (
				<div>
					<center>
						<div className="alert alert-warning alert-dismissible br3" style={{marginLeft: '1.5rem', marginRight: '1.5rem', opacity: '80%'}}>
					  		<strong>Oops!</strong> You have crossed number of attempts... <br/> 
				  			<div style={{paddingTop: '5px'}}>Please come back later</div>
						</div>
					</center>
				</div>
			);
		}
		else /* For Desktop Users */
		{
			return(
				<div>
					<center>
						<div className="alert alert-warning alert-dismissible br3 tc-l tc-m mh6" style={{marginRight: '30%', marginBottom: '2rem', marginLeft: '30%', opacity: '75%'}}>
				  			<strong>Oops!</strong> You have crossed number of attempts... <br/> 
				  			<div style={{paddingTop: '5px'}}>Please come back later</div>
						</div>
					</center>
				</div>
			);
		}
	}
	else if((NumberOfSigninFailed > 0) && (NumberOfSigninFailed < 10))	/* Retuns Nothing in case of attempts in range (<10) */
	{
		return (
			<div>
				<center>
					<p style={{color: 'red', marginTop: '0px'}}>Incorrect email or password</p>
				</center>
			</div>
		);
	}
	else
	{
		return (
			<div></div>
		);
	}
}

export default SigninAttemptStatus;