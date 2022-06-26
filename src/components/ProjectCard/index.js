import React, { useState } from "react";
import Modal from "../Modal/index";

const ProjectCard = () => {
  const photos = [
    //{
    //   name: "Project 3",
    //   description:
    //     "",
    //   stack:
    //     "",
    //   caption: "Regal ",
    //   github: "https://github.com/BlinkingHeimdall/Regal",
    //   deployment:
    //     "",
    // },
    {
      name: "Show-Pro",
      description:
        "A website that allows the user to search an artist which will present them with a list of upcoming events they can click to open a webpage to purchase tickets through. They will also be presented with information about the artist alongside these events including a picture and the artist's bio. Finally, a history of their searches will be preserved on their device so if they want to quickly revist a previously searched artist they can simply click on the relevent history link.",
      stack:
        "Javascript, CSS, HTML, Bulma, JQuery. We also use 2 APIs: TheAudioDB and Seatgeek",
      caption: "Show-Pro ",
      github: "https://github.com/BlinkingHeimdall/show-pro",
      deployment: "https://BlinkingHeimdall.github.io/show-pro/",
    },
    {
      name: "J.A.R.V.I.S.",
      description:
        "An app used to input and track tasks that the average homeowner may need to do around the house.",
      stack:
        "Express-handlebars, MySQL2, Sequelize, dotenv, bcrypt, express-session, connect-session-sequelize, Heroku",
      caption: "J.A.R.V.I.S.",
      github: "https://github.com/JMilner86/jarvis",
      deployment: "https://mighty-tor-32004.herokuapp.com/",
    },
    {
      name: "Password Generator",
      description: "An app to help people generate a random password",
      stack: "Script.js, CSS, HTML",
      caption: "Password Generator",
      github: "https://github.com/BlinkingHeimdall/Password-Generator",
      deployment:
        "https://blinkingheimdall.github.io/Password-Generator/",
    },

    {
      name: "1st Portfolio",
      description: "My 1st ever web developer portfolio.",
      caption: "1st Portfolio",
      stack: "HTML, CSS",
      github: "https://github.com/BlinkingHeimdall/Jason-Adams-Portfolio",
      deployment: "https://blinkingheimdall.github.io/Jason-Adams-Portfolio/",
    },
    {
      name: "Weather Dashboard",
      description:
        "A weather dashboard that allows the user to search for a city and get the current weather conditions for that city.",
      stack:
        "Javascript, CSS, HTML, and OpenWeatherMap API",
      caption: "Weather Dashboard",
      github: "https://github.com/BlinkingHeimdall/weather-dashboard",
      deployment: "https://blinkingheimdall.github.io/weather-dashboard/",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section>
      <div>
        {isModalOpen && (
          <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
        )}
      </div>
      <div className="project-row">
        {photos.map((image, i) => (
          <div className="project-img" key={i}>
            <p className="project-name" onClick={() => toggleModal(image, i)}>
              {image.caption}
            </p>
            {/* <img
              src={require(`../../assets/projects/${i}.jpg`).default}
              alt={image.name}
            /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;