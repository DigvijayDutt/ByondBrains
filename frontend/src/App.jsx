import Home from './pages/Home';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
