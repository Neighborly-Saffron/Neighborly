import React from 'react';
import { Link } from 'react-router-dom';
const { useState, useEffect } = React;

function Header() {
	return (
		<div className="w-full flex h-fit border-b-2 border-t-2 p-5 items-baseline">
			<h1 className="align-middle italic text-4xl mr-auto" >Neighborly</h1>

			<ul className="flex gap-4 mr-5 hover:text-darkerblue">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/groups">Groups</Link>
				</li>
				<li>
					<Link to="profile">Profile</Link>
				</li>
				<li>Search</li>
			</ul>
		</div>
	);
}

export default Header;