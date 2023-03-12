import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Organisation from './Pages/Organisation';
import Sponsor from './Pages/Sponsor';
import Calendar from './Pages/Calendar';
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
					<Route path='/faq' element={<Faq />} />
					<Route path='*' element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
