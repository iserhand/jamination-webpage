import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Organisation from './Pages/Organisation';
import Sponsor from './Pages/Sponsor';
import Calendar from './Pages/Calendar';
import Location from './Pages/Location';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/org' element={<Organisation />} />
					<Route path='/destekcilerimiz' element={<Sponsor />} />
					<Route path='/calendar' element={<Calendar />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/location' element={<Location />} />
					<Route path='/faq' element={<Faq />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
