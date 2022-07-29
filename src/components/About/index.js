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
          When I am not trying to figure out how to make interesting things on the internet, I am spending
          time with my wife and kid. We like to play video games and travel. I am also a very avid comic
          reader (mostly Marvel) or looking for a good story. 
        </p>
        <p>TECHNOLOGIES:</p>
        <ul className="stack-list">
          <li>HTML5, CSS, and JavaScript</li>
          <li>MERN</li>
          <li>SQL/NoSQL/MySQL</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>jQuery</li>
          <li>SPA</li>
          <li>GitHub</li>
          <li>React</li>
        </ul>
        <p>EDUCATION:</p>
        <ul>
          <li>
            Certification in Full Stack Web Development From the University of Utah. <br/>
            Associates from Utah State University. <br/>
            Licensed Minister from American Marriage Ministries. <br/>
            </li>
          <a href="https://www.credly.com/badges/976cdf21-da1c-4b7a-823c-13ba1fd14466/public_url">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX////MAADIAAD98vLfhobmnJz01tbSLy//+vr99vbdfHz87u7fhITjkJDRIyPTMzPooqLyy8vz0dHpp6f229v55eXuubnOExPPHR3RKCjqrKz34uLvvr7ww8Pll5fyzMzgbKszAAAB9UlEQVR4nO3cS1PUQBSA0WtmVGAYXj5ABfn//1LdkakKkM7th1Xn26Zyu09lkfQmEZIkSZIkSZIkSZIkSYN0vkvrZHLe4PNNwosprcNs8CFv8MUm4f5DWvOHuMsbvCckzIqwOELCtAiLIyRMi7A4QsK0CIsjJEyLsDhCwrQIiyMkTIuwOELCtAiLIyRMi7A4QsK0CIsjfL3LvI1UE15uEh6vPr/sYc3K1/NbT4QPs6vXq0w/Xt56ddwkPOlmzT5WTV4zePqaaZr3cQzhp0q8ICR8LULCrAgJlyMkzIqQcDlCwqwICZcjJMyKkHA5QsKsCAmXIyTMipBwOULCrAgJlyMkzIqQcDlCwqwICZcjJMyKkHA5QsKsCOfCs/f3fwqrRUhI2D9CQsL+ERIS9o9wSz+n3rp/Tb/qCWM/AHF6rAgcgTg9VQVGHDsTqwN7ExsA+xKn2wbAiN/diI2A/YjTcyPg3zd/F2JDYB/idNcQGHHTntgW2J5Y82N0DGJ7YMSXlsQewKbEPsCGh6mKP2gbg9gP2IjYE9iEWPNE/56+1yb2BlYnfuvti8rEEYBViWMAKxJHAUY81iEe3l65WVWIIwEjntKJ92MBKxBHA0bcphLvd2+v2LznROKQwIi7KatBgRFnu6R6QyRJkiRJkiRJkiRJksr6AxK4VGr/2e3qAAAAAElFTkSuQmCC"
              className="Logo"
              alt="Logo"
            />
            </a>
            Verified on Credly
        </ul>
      </div>
      <div>
      <img src={Me} className="selfie" alt="ProfessionalJason" />
      </div>
    </section>
  );
};

export default About;