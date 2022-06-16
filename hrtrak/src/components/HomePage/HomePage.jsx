import React from 'react';


function HomePage(props) {
  return (
      <div className='Home'>
       <h1> Welcome to HR-Trak!</h1>

       <p> Please begin by adding as many employees and departments as you wish. Each employee created requires a department, and each department requires a manager.</p>


      Currently, the following features are available:
         <ul>
          <li>  Ability to create a new employee and department </li>
          <li>  Ability to show details about a specific employee </li>
          <li>  Ability to delete an employee or department  </li>
         </ul>

      </div>
  );
}

export default HomePage;