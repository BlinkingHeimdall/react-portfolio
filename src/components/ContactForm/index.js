import React, { useState } from "react";
import { validateEmail } from "../../utils/emailValidate";

const ContactForm = (props) => {
  const { setContactSelected } = props;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
       const isValid = validateEmail(e.target.value);
       if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactSelected(false);
  };

  return (
    <section className="contact-container">
      <div className="contact-header">
        <div>
          <h2>
            <a
              className="resume-button"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1qgfNAoRy-F0k5AEpN9ipOcDYvl9T3ZPE/view?usp=sharing"
            >
              RESUME 🔗
            </a>
          </h2>
        </div>
        <button
          className="close-button"
          onClick={() => setContactSelected(false)}
        >
          X
        </button>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}></form>
      <h2>CONTACT ME: </h2>
      <p>
        {" "}
        <a href="tel: +1-801-391-8872" aria-hidden="true">
          (801) 391-8872 📞
        </a>
      </p>
      <p>
        {" "}
        <a
          target="_blank"
          href="mailto:jmadams41resume@gmail.com"
          rel="noreferrer"
        >
          jmadams41@gmail.com 📩
        </a>
      </p>
      <p>
        {" "}
        <a
          target="_blank"
          href="https://linkedin.com/in/jason-adams-blinkingheimdall"
          rel="noreferrer"
        >
          LinkedIn 🔗
        </a>
      </p>
      <p>⭐More cool stuff in the footer⭐</p>
    </section>
  );
};

export default ContactForm;