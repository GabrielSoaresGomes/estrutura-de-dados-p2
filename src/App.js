import {Routes, Route} from 'react-router-dom'
import Navbar from './layouts/Navbar/Navbar';

import Home from './pages/Home/Home';
import ArvoreB from "./pages/ArvoreB/ArvoreB";
import ArvoreBPlus from "./pages/ArvoreB+/ArvoreB+";
import ArvoreBAsterisk from "./pages/ArvoreB*/ArvoreB*";
import ArvoreVermelhoPreto from "./pages/ArvoreVermelhoPreto/ArvoreVermelhoPreto";
import Integrantes from "./pages/Integrantes/Integrantes";
import Error404 from "./pages/404/404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/arvoreB' exact element={<ArvoreB />} />
        <Route path='/arvoreB+' exact element={<ArvoreBPlus />} />
        <Route path='/arvoreBAsterisk' exact element={<ArvoreBAsterisk />} />
        <Route path='/arvoreVermelhoPreto' exact element={<ArvoreVermelhoPreto />} />
        <Route path='/integrantes' exact element={<Integrantes />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
