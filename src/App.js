import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import Search from './components/Search';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Movie/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Viewall' element={<Viewall/>}/>

      
     </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
