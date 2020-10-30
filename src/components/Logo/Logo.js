import React from 'react';
import Tilt from 'react-tilt'; /*npm package from (https://www.npmjs.com/package/react-tilt)*/
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
			<div>
			{ window.matchMedia("only screen and (max-width: 760px)").matches
			? 	<div className="ml0 mt0 mr2 mb0" style={{touchAction: 'none'}}>
					<Tilt className="TiltBackground br2 shadow-2" options={{ max : 55 }} style={{ height: 90, width: 90}} >
						<div className="Tilt-inner pa3" style={{touchAction: 'none'}}>
				 			<img alt="logo" src={brain} />
				 		</div>
					</Tilt>
				</div>
			: 	<div className="mt2 ml2">
					<Tilt className="TiltBackground br2 shadow-2" options={{ max : 55 }} style={{ height: 115, width: 115 }} >
						<div className="Tilt-inner pa3">
				 			<img alt="logo" src={brain} />
				 		</div>
					</Tilt>
				</div>
			}
			</div>
	);
}


export default Logo;