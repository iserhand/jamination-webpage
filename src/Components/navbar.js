import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';
function navbar() {
	return (
		<>
			<div className='navContainer'>
				<div className='navBar'>
					<NavLink className='navItem' active='active' smooth='true' spy='true' to='/'>
						ANA SAYFA
					</NavLink>

					<NavLink className='navItem' active='active' to='/org' smooth='true' spy='true'>
						DÜZENLEYENLER
					</NavLink>
					<NavLink
						className='navItem'
						active='active'
						to='/sponsor'
						smooth='true'
						spy='true'
					>
						SPONSORLAR
					</NavLink>
					<NavLink
						className='navItem'
						active='active'
						to='/calendar'
						smooth='true'
						spy='true'
					>
						ETKİNLİK TAKVİMİ
					</NavLink>
					<NavLink className='navItem' active='active' to='/faq' smooth='true' spy='true'>
						SSS
					</NavLink>
					<NavLink
						className='navItem'
						active='active'
						to='/contact'
						smooth='true'
						spy='true'
					>
						İLETİŞİM
					</NavLink>
					<NavLink
						className='navItem'
						active='active'
						to='/location'
						smooth='true'
						spy='true'
					>
						ULAŞIM
					</NavLink>
				</div>
			</div>
			<Outlet></Outlet>
		</>
	);
}

export default navbar;
