import React from "react";
import Me from "../../assets/me.jpg";

const About = (props) => {
  const { setContactSelected } = props;

  return (
    <section className="about-container">
      <div>
        <p>
          Hello, I'm Jason Adams. I'm a full stack web developer looking for new opportunities. <br />
          My overall goal with development is to make applications that help people in their daily <br /> 
          lives, and make the world a better place for my daughter.
        </p>

        <p>
          When I am not trying to figure out how to make interesting things on the internet, I am spending <br/>
          time with my wife and kid. We like to play video games and travel. I am also a very avid comic<br/>
          reader (mostly Marvel) or looking for a good story. 
        </p>
        <p>TECHNOLOGIES:</p>
        <ul className="stack-list">
          <li>HTML5, CSS and JavaScript</li>
          <li>MERN</li>
          <li>SQL/NoSQL/MySQL</li>
          <li>Handlebars.JS</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>jQuery</li>
          <li>Insomnia</li>
          <li>SPA</li>
          <li>PWA</li>
          <li>GitHub</li>
          <li>React</li>
        </ul>
        <p>EDUCATION:</p>
        <ul>
          <li>
            Pending Certification in Full Stack Web Development From the University of Utah. <br/>
            Associates from Utah State University. <br/>
            Licensed Minister from American Marriage Ministries. <br/>
          </li>
        </ul>
      </div>
      <div>
      <img src={Me} className="selfie" alt="ProfessionalJason" />
      </div>
    </section>
  );
};

export default About;