import React from "react";
import Products from './Products'


export default function Card() {
  return (
    <><div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false" height={400}>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={require('./pic1.jpg')} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h2 className="display-5 my-4">NEW SEASON ARRIVALS</h2>
          <h3>CHEACK OUT THE TRENDS</h3>
        </div>
      </div>
      <div class="carousel-item">
        <img src={require('./pic2.jpg')} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h2 className="display-5 my-4">NEW SEASON ARRIVALS</h2>
          <h3>CHEACK OUT THE TRENDS</h3>
        </div>
      </div>
      <div class="carousel-item">
        <img src={require('./pic3.jpg')} class="d-block w-100"  style={{ height: 600 + "px" }} alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

      
    
      <Products/>
    </>
  );
}
