import React from "react";
import ContactForm from "../../components/contact/ContactForm";
import ContactFooter from "../../components/footer/ContactFooter";

const Contact = () => {
  return (
    <div>
      <ContactForm />
      <footer>
        <ContactFooter />
      </footer>
    </div>
  );
};

export default Contact;
