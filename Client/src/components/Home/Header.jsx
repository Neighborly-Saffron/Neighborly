import React from 'react';
import LogoutButton from '../Login/LogoutButton.jsx';
import { Link } from 'react-router-dom';
import GreenLogo from '../../../../public/Logo_Green.png';
const { useState, useEffect } = React;

function Header() {
	return (
		<div className="w-full flex h-fit border-b-2 p-5 items-baseline bg-lightergreen text-white">
			<h1 className="align-middle italic text-4xl mr-auto">
				<Link className="flex gap-3 items-center" to="/">Neighborly
				<img src={GreenLogo} />
				</Link>
				</h1>

			<ul className="flex gap-4 mr-5 text-2xl">
				<li className="hover:text-darkerblue hover:ease-in duration-300">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:text-darkerblue hover:ease-in duration-300">
					<Link to="/groups">Groups</Link>
				</li>
				<li className="hover:text-darkerblue hover:ease-in duration-300">
					<Link to="profile">Profile</Link>
				</li>
				<li className="hover:text-darkerblue hover:ease-in duration-300" >
					<LogoutButton />
				</li>
			</ul>
		</div>
	);
}

export default Header;
