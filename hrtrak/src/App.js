import './App.css';
import Navbar from './components/NavBar/NavBar'
import EmployeeList from './components/EmployeeListPage/EmployeeList'
import {Route} from "react-router-dom"
import NewEmployeeForm from './components/NewEmployeeForm/NewEmployee'

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmployeeList /> 
      

    </div>
  );
}

export default App;
