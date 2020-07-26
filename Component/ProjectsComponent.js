import React, {useState} from 'react'
import BpaScreenShot from '../../src/bpa.png';


export default function ProjectsComponent(){

const [modalState1, setModalState1] = useState(false);
const [modalState2, setModalState2] = useState(false);
const [modalState3, setModalState3] = useState(false);
const [modalState4, setModalState4] = useState(false);

const manageState = () => {
  setModalState1(!modalState1)
}

const manageState2 = () => {
  setModalState2(!modalState2)
}

const manageState3 = () => {
  setModalState3(!modalState3)
}

const manageState4 = () => {
  setModalState4(!modalState4)
}

  return (



    <div className = "more-section" id ="more">

<div className = {`modalBackground modalShowing-${modalState1}`}>
  <div className = "modalInner">
  <div className = "modalImage">
    <img src={BpaScreenShot}alt="modal pic"/>
  </div>
<div className="modalText">
<span className="close">&times;</span>
<h3>Bristol Air Pollution Web App</h3>
<p>Front and Back End development of a Web App to visualise the Air quality within Bristol, UK.
Includes the Refactoring of an original “Big Data” file into separate smaller ".csv" files, which are then cleansed and normalised into XML format.
HTML5, CSS, JQuery & AJAX are used to manipulate google chart/map API’s and implement separate user controllable data visualisations.</p>
<div className="modalSkillsFE">
<h4>Front End:</h4>
<p>JavaScript</p>
<p>HTML5</p>
<p>CSS</p>
<p>JQuery</p>
<p>BootStrap</p>
<p>AJAX</p>
<p>Google Chart/Map API's</p>
</div>
<div className="modalSkillsBE">
<h4>Back End:</h4>
<p>PHP</p>
<p>XML</p>
<p>XSD</p>
<p>Xquery</p>
<p>AJAX</p>
</div>
</div>

</div>




    </div>


    <div className = {`modalBackground modalShowing-${modalState2}`}>modal2</div>
    <div className = {`modalBackground modalShowing-${modalState3}`}>modal3</div>
    <div className = {`modalBackground modalShowing-${modalState4}`}>modal4</div>

      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span onClick={() => manageState()} class="service-icon rounded-circle mx-auto mb-3">

            </span>
            <h4>
              <strong>Bristol Air Pollution Web App</strong>
            </h4>
            <p class="text-faded mb-0">Front and Back End development of a Web App to visualise Air quality data captured within Bristol, UK.</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span onClick={() => manageState2()} class="service-icon rounded-circle mx-auto mb-3">
</span>
            <h4>
              <strong>Currency Conversion API</strong>
            </h4>
            <p class="text-faded mb-0">REST-based micro-service that provides live “to” & “from” conversions of requested currencies. Includes an additional client-based application that incorporates CRUD.</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span onClick={() => manageState3()} class="service-icon rounded-circle mx-auto mb-3">

            </span>
            <h4>
              <strong>Tweedi.py</strong>
            </h4>
            <p class="text-faded mb-0">Data is scraped from Twitter to generate and play a piece of music based on a hashtag’s latest 100 tweets.</p>
          </div>
          <div class="col-lg-3 col-md-6">
            <span onClick={() => manageState4()} class="service-icon rounded-circle mx-auto mb-3">

            </span>
            <h4>
              <strong>Pick-a-Flix</strong>
            </h4>
            <p class="text-faded mb-0">Random Film or TV series selector from Netflix's catalogue. Includes the options to filter by multiple, one or no particular genre.</p>
          </div>
        </div>
      </div>
      </div>





    )
  }
