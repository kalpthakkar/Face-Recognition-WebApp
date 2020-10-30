import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ keyEnter, onInputChange, onButtonSubmit }) => {

	if(window.matchMedia("only screen and (max-width: 760px)").matches) /*For Mobile Users*/
	{

		return (
			<div>
				<div className="center"> {/*center is a class defined in ImageLinkForm.css using flexbox*/}
					<div style={{marginLeft: '5%', marginRight: '5%'}} className="formContainer center br3 shadow-5 glow:hover container"> 				{/*form container*/}
						<input style={{width: '85%', marginTop: '30px', marginBottom: '20px', borderStyle: 'none'}} 
							   className="f4 pv2 br3 center" 
							   type='text' 
							   placeholder=' Paste the URL . . .' 
							   onKeyPress={keyEnter} 
							   onChange={onInputChange}/>
						<button style={{width: '60%', marginBottom: '25px'}} 
						        className="detectMobileButton f4 link ph3 pv2 glow:hover center" 
						        onClick={onButtonSubmit}>
						        <span>Detect</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
	else
	{
		return (
			<div>
				<div className="center"> {/*center is a class defined in ImageLinkForm.css using flexbox*/}
					<div className="formContainer center pa4 br3 shadow-5 glow:hover customFont"> 				{/*form container*/}
						<input className="searchBarRoundness f4 pa2 w-70 center fontPlaceholder" 
							   type='text' placeholder='Paste your URL...' 
							   onKeyPress={keyEnter} 
							   onChange={onInputChange}/>
						<button className="detectButton f4 w-30 link ph3 pv2 glow:hover" 
						        onClick={onButtonSubmit}>
						    	<span>Detect</span>
						</button>
					</div>
				</div>
			</div>
		);
	}	
}

export default ImageLinkForm;