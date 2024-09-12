import React from "react";
import "./Services.css"

const Services = () => {
  return (
    <>
      <section id="services" class="services-container">
        <div class="services-header">
          <h1 class="services-title">My Services</h1>
          <p class="services-subtitle">What I Can Offer You</p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-code"></i>
            </div>
            <h2 class="service-title">Web Development</h2>
            <p class="service-description">
              Custom web development solutions using the latest technologies to
              ensure performance and scalability.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-paint-brush"></i>
            </div>
            <h2 class="service-title">Web Design</h2>
            <p class="service-description">
              Creative and responsive web design services to give your website a
              modern and engaging look.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-server"></i>
            </div>
            <h2 class="service-title">Hosting</h2>
            <p class="service-description">
              Reliable and secure hosting services to keep your website up and
              running smoothly.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <i class="fa fa-laptop-code"></i>
            </div>
            <h2 class="service-title">Web App</h2>
            <p class="service-description">
              Development of sophisticated web applications tailored to your
              business needs and goals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
