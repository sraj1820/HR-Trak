import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Carousel from 'react-bootstrap/Carousel'
import '../HomePage/homePage.css'


function HomePage(props) {
  return (

    <div>
    <Carousel className = "mainCaro">
  <Carousel.Item className = 'main' >
  <div class="carousel slide" data-ride="carousel">
      <div class="carousel-inner bg-info" role="listbox">
            <div class="carousel-item active">
                <div class="d-flex align-items-center justify-content-center min-vh-100">
                    <h1 class="display-1">Hey, Welcome to HR-Trak</h1>
                </div>
            </div>
      </div>
</div>
    <Carousel.Caption>
      <p>The interactive employee portal to keep track of employees and departments within the Organization.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
  <div class="carousel slide" data-ride="carousel">
      <div class="carousel-inner bg-info" role="listbox">
            <div class="carousel-item active">
                <div class="d-flex align-items-center justify-content-center min-vh-100">
                    <h1 class="display-1">Current Features:</h1>
                </div>
            </div>
      </div>
</div>
    <Carousel.Caption>
      <p>Adding employees and departments and linking them with one another. Ability to show employee details and delete</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
  <div class="carousel slide" data-ride="carousel">
      <div class="carousel-inner bg-info" role="listbox">
            <div class="carousel-item active">
                <div class="d-flex align-items-center justify-content-center min-vh-100">
                    <h1 class="display-1">Features that will be implemented in the future</h1>
                </div>
            </div>
      </div>
</div>
    <Carousel.Caption>
      <p>Signup/Login option. Update features for both employees/departments. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    {/* <Alert variant="success">
  <Alert.Heading>Hey, welcome to HR-Trak! </Alert.Heading>
  <p>
    This app is meant to be an internal software used by the Human Resources team to list employees and their departments and add any key information.


  </p>
  <hr />
  <p className="mb-0">
    <ul>
      Currently, the following features are available:
      <li> Ability to create a new employee and department </li>
      <li> Ability to link an employee with a specific department and vice versa</li>
      <li> Ability to show details for an employee</li>
      <li> Ability to delete an employee/department</li>
    </ul>
  </p> */}
  {/* </Alert> */}

      </div>
  )}

export default HomePage;