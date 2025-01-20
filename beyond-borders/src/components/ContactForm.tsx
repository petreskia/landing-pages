import React, { useState } from "react";

interface ContactFormProps {
  title: string; // Prop for the <h2> content
  description: React.ReactNode; // Prop for the <p> content
}

export default function ContactForm({ title, description }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError(""); // Clear error on input change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact d-flex flex-column flex-md-row gap-5">
      <div className="info-contact p-3 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center mb-5 green-text">{title}</h2>
        <article className="text-center fs-3 green-text">{description}</article>
      </div>
      <div className="form p-4">
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="form-control"
              autoComplete="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-control"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="form-control"
              rows={6}
              autoComplete="off"
              required
            ></textarea>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
