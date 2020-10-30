import React from 'react';
import './BootstrapAlertModalCSS.css'


const StatusInfo = ({ imageUrl }) => {

	/******* State Information *******
	On Login: 										input === ''	box !== ''	 imageUrl === ''	disableCSS !== ''
	On Valid/Invalid link_Paste (Not Submit): 		input !== ''	box !== ''	 imageUrl === ''	disableCSS !== ''
	After Valid/Invalid link_paste_Submit: 			input !== ''	box !== ''	 imageUrl !== ''	disableCSS !== ''
	**********************************/
	if( imageUrl === '' )
	{
		if(window.matchMedia("only screen and (max-width: 760px)").matches) /*For Mobile Users*/
		{
			return (
				<div>
					<div className="alert alert-success alert-dismissible br3" style={{margin: '2rem'}}>
					  This Magic Brain will <strong>detect faces</strong> in your picture.
					</div>
				</div>
			);
		}
		else /*For Desktop Users*/
		{
			return(
				<div>
					<div className="alert alert-success alert-dismissible br3 tc-l tc-m mh6" style={{marginTop: '2rem', marginRight: '30%', marginBottom: '2rem', marginLeft: '30%'}}>
				  		This Magic Brain will <strong>detect faces</strong> in your picture.
					</div>
				</div>
			);
		}
	}
	else if( imageUrl !== '' ) 
	{
		if(window.matchMedia("only screen and (max-width: 760px)").matches) /*For Mobile Users*/
		{
			return (
				<div>
					<div className="alert alert-info alert-dismissible br3" style={{marginLeft: '2rem', marginRight: '2rem', marginTop: '0.5rem', opacity: '80%'}}>
					  <strong>Invalid!</strong> Please Enter a valid image URL...
					</div>
				</div>
			);
		}
		else /*For Desktop Users*/
		{
			return(
				<div>
					<div className="alert alert-info alert-dismissible br3 tc-l tc-m mh6" style={{marginTop: '0.5rem', marginRight: '30%', marginBottom: '2rem', marginLeft: '30%', opacity: '75%'}}>
				  		<strong>Invalid!</strong> Please Enter a valid image URL...
					</div>
				</div>
			);
		}
	}
	else
	{
		return(
			<div>

				<h3> Something might have gone wrong... </h3>
				<p> We will soon try to resolve this issue :) </p>
				{/*		
						<p> This issue is just kept for safety purpose. <br/>
							Incase this occurs, there might be some update/modification in our application or packages (Most probably modification in our application)<br/>
							To Debug this issue, import (in components/StatusInfo.js from App.js):
						</p>
						<p> input, box, disableCSS int addition to imageUrl</p>
						<p> And remove comment from below. This will not fix problem but will help to analyse the state of some fields to help resolve this problem </p>
				*/}
				{/*

						{ input === ''
						? <h3> input === '' </h3>
						: <h3> Not input === '' </h3>
						}
						{ box === ''
						? <h3> box === '' </h3>
						: <h3> Not box === '' </h3>
						}
						{ imageUrl === ''
						? <h3> imageUrl === '' </h3>
						: <h3> Not imageUrl === '' </h3>
						}
						{ disableCSS === ''
						? <h3> disableCSS === '' </h3>
						: <h3> Not disableCSS === '' </h3>
						}
				*/}

			</div>
		);
	}
	
}

export default StatusInfo;