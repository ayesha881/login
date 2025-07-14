import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./comp/login"
import Home from './comp/home';
function App(){
    return(
        <>
         
          <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
      </Router>
        </>
    )
}

export default App
