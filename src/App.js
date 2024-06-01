import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda'
import Makanan from './pages/Makanan';
import Index from './pages/Index';
import Minuman from './pages/Minuman';
import About from './pages/About';
import { DataProvider } from './context/DataContext';


function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/beranda' element={<Beranda />} />
          <Route path='/makanan' element={<Makanan />} />
          <Route path='/minuman' element={<Minuman />} />
          <Route path='/tentang-kami' element={<About />} />
          {/* <Route path='/' element={<Index />} />
      <Route path='/' element={<Index />} /> */}
        </Routes>
      </DataProvider>
    </BrowserRouter>

  );
}

export default App;
