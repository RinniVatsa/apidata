


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPageComponent1 from './pages/SecondPageComponent1';
import SecondPageComponent2 from './pages/SecondPageComponent2';





function App() {
  
  return (


    <Router>
        
      <Routes>
        <Route  path="/" element={ <FirstPage/>} />
        <Route path="/second"   element={<SecondPageComponent1/>} />
        <Route path="/department-list"  element={<SecondPageComponent2/>} />
    
      </Routes>
    </Router>
   
  );
}

export default App;
