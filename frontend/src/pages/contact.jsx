import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>
      <form style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" rows="4" style={{ marginLeft: '10px', verticalAlign: 'top' }}></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '1em', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
