import React from 'react';

const Contacts = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <p>Phone: 555-555-5555</p>
      <p>Email: info@mywebsite.com</p>
      <p>Address: 123 Main St, Anytown USA</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contacts;

