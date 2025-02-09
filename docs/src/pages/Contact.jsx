import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    status: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      // Proceed with form submission logic (e.g., using emailjs)
      alert("Message sent successfully!");
    } else {
      setFormErrors(errors); // Display errors
    }
  };

  // Form validation function
  const validateForm = (data) => {
    const errors = {};
    
    if (!data.name) {
      errors.name = "Name is required.";
    } else if (data.name.length < 3) {
      errors.name = "Name must be at least 3 characters.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid.";
    }

    if (!data.status) {
      errors.status = "Status is required.";
    }

    if (!data.message) {
      errors.message = "Message is required.";
    } else if (data.message.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    return errors;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h1>Get in Touch</h1>
          <p className="contact-description">
            Have a question or want to collaborate? Feel free to reach out! I'll try my best to respond within 24 hours.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>

          {/* Location Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-input"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>

          {/* Status Dropdown */}
          <div className="form-group">
            <label className="form-label" htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              className="form-select"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Your Status</option>
              <option value="student">Student</option>
              <option value="professional">Working Professional</option>
              <option value="freelancer">Freelancer</option>
              <option value="other">Other</option>
            </select>
            {formErrors.status && <p className="error-message">{formErrors.status}</p>}
          </div>

          {/* Message Input */}
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            {formErrors.message && <p className="error-message">{formErrors.message}</p>}
          </div>

          <button 
            type="submit" 
            className="submit-btn"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
