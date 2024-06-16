import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      // setResponse(data.message);
      setResponse("Thank you for contacting us.");
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setResponse('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-form">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={form.message} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      {response && <div className="response">{response}</div>}
    </div>
  );
};

export default Contact;
