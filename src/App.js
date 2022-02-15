import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<About />} path='/about' />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
// return (
//   <div className="">
//     <div className='bg-black'>
//       <Navbar />
//     </div>
//     <Home />
//   </div>
// );