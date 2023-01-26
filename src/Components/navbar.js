import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';
function navbar() {
	return (
		<>
			<div className='navContainer'>
				<div className='navBar'>
					<NavLink className='navItem' activeClass='active' smooth spy to='/'>
						ANA SAYFA
					</NavLink>

					<NavLink className='navItem' activeClass='active' to='/org#' smooth spy>
						DÜZENLEYENLER
					</NavLink>
					<NavLink className='navItem' activeClass='active' to='/sponsor#' smooth spy>
						SPONSORLAR
					</NavLink>
					<NavLink className='navItem' activeClass='active' to='/calendar' smooth spy>
						ETKİNLİK TAKVİMİ
					</NavLink>
					<NavLink className='navItem' activeClass='active' to='/faq' smooth spy>
						SSS
					</NavLink>
					<NavLink className='navItem' activeClass='active' to='/contact' smooth spy>
						İLETİŞİM
					</NavLink>
					<NavLink className='navItem' activeClass='active' to='/location' smooth spy>
						ULAŞIM
					</NavLink>
				</div>
			</div>
			<Outlet></Outlet>
		</>
	);
}

export default navbar;
