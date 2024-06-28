
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mm1 from './Pages/MM1/Mm1';
import Mmm from './Pages/MMM/mmm';

function App() {



  return (
    <>
      <BrowserRouter basename="/Calculadora">
        <Routes>
          <Route path="/" element={<Mm1 />} />
          <Route path="/MMM" element={<Mmm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
