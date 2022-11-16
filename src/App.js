import {Routes, Route} from 'react-router-dom'
import Navbar from './layouts/Navbar/Navbar';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
