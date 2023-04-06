
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import AboutUs from './aboutus';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='exercise1'>Exercise1</Link>
        <Link to='exercise2'>Exercise2</Link>
        <Link to='exercise3'>Exercise3</Link>
        <Link to='exercise4'>Exercise4</Link>
        <Link to='about-us'>About Us</Link>
      </nav>
      <Exercise1 />
      <Routes>
        <Route path='/exercise1' element={<Exercise1 />} />
        <Route path='/exercise2' element={<Exercise2 />} />
        <Route path='/exercise3' element={<Exercise3 />} />
        <Route path='/exercise4' element={<Exercise4 />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>

    </div>
  );
}

export default App;
