import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './styles.css';
function navbar() {
	return (
		<>
			<div className='navContainer'>
				<div className='navBar'>
					<Link className='navItem' to='/'>
						ANA SAYFA
					</Link>
					<Link className='navItem' to='/org'>
						DÜZENLEYENLER
					</Link>
					<Link className='navItem' to='/sponsor'>
						SPONSORLAR
					</Link>
					<Link className='navItem' to='/calendar'>
						ETKİNLİK TAKVİMİ
					</Link>
					<Link className='navItem' to='/faq'>
						SSS
					</Link>
					<Link className='navItem' to='/contact'>
						İLETİŞİM VE ULAŞIM
					</Link>
				</div>
			</div>
			<Outlet></Outlet>
		</>
	);
}

export default navbar;
