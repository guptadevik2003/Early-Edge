import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import About from 'pages/About';
import Features from 'pages/Features';
import GetStarted from 'pages/GetStarted';
import Analytics from 'pages/Analytics';
import PageNotFound from 'pages/PageNotFound';

// Components
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import RequireData from 'components/RequireData';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>

          <Route path='' element={<><Navbar /><Home /><Footer /></>} />

          <Route path='about' element={<><Navbar /><About /><Footer /></>} />

          <Route path='features' element={<><Navbar /><Features /><Footer /></>} />

          <Route path='get-started' element={<><Navbar /><GetStarted /><Footer /></>} />

          <Route path='' element={<RequireData />}>

            <Route path='analytics' element={<><Navbar /><Analytics /><Footer /></>} />
            
          </Route>

          <Route path='*' element={<><Navbar /><PageNotFound /><Footer /></>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
