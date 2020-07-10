import React, {Component} from "react";

class Projects extends Component {
  state = {};
  render(){
    return <div className = "projects-section" id ="projects">


      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
              <img class="icon-screen-smartphone"></img>
            </span>
            <h4>
              <strong>Bristol Air Pollution Web App</strong>
            </h4>
            <p class="text-faded mb-0">Front and Back End development of a Web App to visualise Air quality data captured within Bristol, UK.</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span class="service-icon rounded-circle mx-auto mb-3">
</span>
            <h4>
              <strong>Currency Conversion API</strong>
            </h4>
            <p class="text-faded mb-0">REST-based micro-service that provides live “to” & “from” conversions of requested currencies. Includes an additional client-based application that incorporates CRUD.</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span class="service-icon rounded-circle mx-auto mb-3">

            </span>
            <h4>
              <strong>Tweedi.py</strong>
            </h4>
            <p class="text-faded mb-0">Data is scraped from Twitter to generate and play a piece of music based on a hashtag’s latest 100 tweets.</p>
          </div>
          <div class="col-lg-3 col-md-6">
            <span class="service-icon rounded-circle mx-auto mb-3">

            </span>
            <h4>
              <strong>Pick-a-Flix</strong>
            </h4>
            <p class="text-faded mb-0">Random Film or TV series selector from Netflix's catalogue. Includes the options to filter by multiple, one or no particular genre.</p>
          </div>
        </div>
      </div>
      </div>
    ;
  }
}

export default Projects;
