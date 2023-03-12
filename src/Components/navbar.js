import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles.css';
import { CSSTransition } from 'react-transition-group';

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const drawerToggle = () => {
		setToggle(!toggle);
	};
	const clickOutside = () => {
		setToggle(false);
	};
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
						to='/destekcilerimiz'
						smooth='true'
						spy='true'
					>
						DESTEKÇİLERİMİZ
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
				</div>
			</div>

			<div className='navContainerMobile'>
				<CSSTransition timeout={500}>
					<div className='navBarMobile'>
						{toggle && (
							<>
								<NavLink
									onClick={clickOutside}
									className='navItem'
									active='active'
									smooth='true'
									spy='true'
									to='/'
								>
									ANA SAYFA
								</NavLink>
								<NavLink
									onClick={clickOutside}
									className='navItem'
									active='active'
									to='/org'
									smooth='true'
									spy='true'
								>
									DÜZENLEYENLER
								</NavLink>
								<NavLink
									onClick={clickOutside}
									className='navItem'
									active='active'
									to='/destekcilerimiz'
									smooth='true'
									spy='true'
								>
									DESTEKÇİLERİMİZ
								</NavLink>
								<NavLink
									onClick={clickOutside}
									className='navItem'
									active='active'
									to='/calendar'
									smooth='true'
									spy='true'
								>
									ETKİNLİK TAKVİMİ
								</NavLink>
								<NavLink
									onClick={clickOutside}
									className='navItem'
									active='active'
									to='/faq'
									smooth='true'
									spy='true'
								>
									SSS
								</NavLink>
								<NavLink
									onClick={clickOutside}
									className='navItem'
									active='active'
									to='/contact'
									smooth='true'
									spy='true'
								>
									İLETİŞİM
								</NavLink>
							</>
						)}

						{toggle && (
							<div className='toggleContainer'>
								<button className='toggleButton' onClick={drawerToggle}>
									<i class='gg-push-chevron-up'></i>
								</button>
							</div>
						)}

						{!toggle && (
							<div className='toggleContainer'>
								<button className='toggleButton' onClick={drawerToggle}>
									<i class='gg-push-chevron-down'></i>
								</button>
							</div>
						)}
					</div>
				</CSSTransition>
			</div>

			<Outlet></Outlet>
		</>
	);
}

export default Navbar;
