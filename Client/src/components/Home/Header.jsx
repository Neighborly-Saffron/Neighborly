import React from 'react';
import { Link } from 'react-router-dom';
const { useState, useEffect } = React;

function Header() {
	return (
		<div className="w-full flex h-fit border-b-2 p-5 items-baseline">
			<h1 className="align-middle italic text-4xl mr-auto">Neighborly</h1>

			<ul className="flex gap-4 mr-5">
				<li className="hover:text-darkerblue">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:text-darkerblue">
					<Link to="/groups">Groups</Link>
				</li>
				<li className="hover:text-darkerblue">
					<Link to="profile">Profile</Link>
				</li>
				<li>Search</li>
			</ul>
		</div>
	);
}

export default Header;
