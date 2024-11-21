import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from 'pages/Home';

// Components

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>

          <Route path='' element={<><Home /></>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
