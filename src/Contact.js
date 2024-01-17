// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me. You can contact me via email or use the form below.
      </p>
      <form>
        <label htmlFor="name">Isaiah:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">ikapr600@gmail.com:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">thank you:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
