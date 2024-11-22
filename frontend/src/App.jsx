import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';

// Components
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>

          <Route path='' element={<><Navbar /><Home /><Footer /></>} />

          <Route path='*' element={<><Navbar /><PageNotFound /><Footer /></>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
