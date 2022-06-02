import './App.css';
import Navbar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EmployeeList from './components/EmployeeListPage/EmployeeList'
import NewEmployeeForm from './components/NewEmployeeForm/NewEmployee'

function App() {
  return (
    
    <div className="App">
      
      <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/employee/all" element ={<EmployeeList/>} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
