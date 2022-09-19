import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_kgyvlu4", "template_nkqydma", form.current, "2kFaSX58Io2p7CJWX").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="container">
        <div id="main">
          <h1>Hubungi Kami</h1>
          <div id="contact-form">
            <h2>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Full Name" name="user_name" required />
              <input type="email" placeholder="email" name="user_email" required />
              <input type="text" placeholder="Subject" name="Subject" required />
              <textarea name="message" cols="30" rows="10">
                {" "}
              </textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

