import React from 'react';
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



      </div>
  )}

export default HomePage;