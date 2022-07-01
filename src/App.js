import './App.css';
import Navbar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EmployeeList from './components/EmployeeListPage/EmployeeList'
import NewEmployee from './components/NewEmployeeForm/NewEmployee'
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails'
import Department from './components/Department/Department'
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    
    <div className="App">
      
      <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path= "/employee/home" element = {<HomePage />} />
      <Route path="/employee/all" element ={<EmployeeList/>} />
      <Route path="/department/all" element={<Department/>} />
      <Route path= "/employee/:id" element = {<EmployeeDetails/>} />
      <Route path = "/employee/create" element = {<NewEmployee />} />
      
    </Routes>
    </BrowserRouter>
    
    

    </div>
  );
}

export default App;
