import React, {Component} from "react";
import LargeCartoonComponent from '../components/LargeCartoonComponent';
import AboutMeComponent from '../components/AboutMeComponent';
import SmallCartoonComponent from '../components/SmallCartoonComponent';
import ProjectsLinkComponent from '../components/ProjectsLinkComponent';

class Main1 extends Component {
  state = {};
  render(){
    return (

  <div className = "main-section" id = "main">

<div className = "cartoon-section-lrg">
    <LargeCartoonComponent1/>
</div>

<div className = "cartoon-section-sml">
    <SmallCartoonComponent/>
</div>

<div id ="container-main-text">
  <div id="main-text">
  <AboutMeComponent/>

    <div id="main-text-links">
    <ProjectsLinkComponent/>
    </div>

</div>
       </div>
       </div>
  );

  }
}

export default Main1;
